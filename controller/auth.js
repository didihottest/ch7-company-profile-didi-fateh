const crypto = require('crypto');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const User = require('../model/user');

exports.getSignup = (req, res, next) => {
    let message = req.flash('error');

    if(message.length > 0){
        message = message[0];   
    }else{
        message = null
    }

    res.render('auth/signup', {
        title: 'Signup',
        errorMessage: message
    });
}

exports.postSignup = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({
        email: email
    })
    .then(userDoc => {
        if(userDoc) {
            return res.redirect('/signup');
        }

        return bcrypt
            .hash(password, 12)
            .then(hashedPassword => {
                const user = new User({
                    email: email,
                    password: hashedPassword
                });

                return user.save();
            })
            .then(result => {
                res.redirect('/login');
            })
    })
    .catch(err => {
        console.log(err);
    })
}

exports.getLogin = (req, res, next) => {
    let message = req.flash('error');

    if(message.length > 0){
        message = message[0];   
    }else{
        message = null
    }

    res.render('auth/login', {
        title: 'Login',
        errorMessage: message
    })
}

exports.postLogin = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({
        email: email
    })
    .then(user => {
        if (!user) {
            req.flash('error', 'Invalid email or password.')
            return res.redirect('/login');
        }

        bcrypt
            .compare(password, user.password)
            .then(doMatch => {
                if (doMatch){
                    req.session.isLoggedIn = true;
                    req.session.user = user;
                    return req.session.save(err => {
                        res.redirect('/');
                    });
                }

                req.flash('error', 'Invalid email or password.')
                res.redirect('/');
            })
            .catch(err => {
                console.log(err);
                res.redirect('/login');
            })
    })
    .catch(err => console.log(err));
}

exports.postLogout = (req, res, next) => {
    req.session.destroy(err => {
        res.redirect('/login');
    });
}