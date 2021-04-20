// use express module
const express = require('express');
const app = express();
const {About, Portfolio, Employee} = require('./../model/api')
// Get request raw json from postman / api
app.use(express.json());
// Get request form form-urlencoded form postman / api
app.use(express.urlencoded({ extended: true }));

// display API for all collections
// display all about entry from database
exports.getAbouts =  (req, res, next) => {
  About.find().exec((err, about)=>{
    res.json(about)
  })
}

// display all portfolio entry from database
exports.getPortfolios = (req, res, next) => {
  Portfolio.find().exec((err, portfolios)=>{
    res.json(portfolios)
  })
}

// display all employees entry from database
exports.getEmployees =  (req, res, next) => {
  Employee.find().exec((err, employees)=>{
    res.json(employees)
  })
}

//all endpoint for add new data to collections
// add new entry to about collection
exports.addAbout = (req, res, next) => {
  const {year, title, description, imageURL} = req.body;
  try {
    const newAbout = new About({
      year: year,
      title: title,
      description: description,
      imageURL: imageURL
    })
    newAbout.save((err) => {
      if (err) {
        res.json(err.message)
      } else {
        res.json(newAbout)
      }
    })
  } catch (error) {
    if (error) res.json(error.message)
  }
}

// add new entry to portfolios collection
exports.addPortfolio = (req, res, next) => {
  const {title, description, imageURL} = req.body;
  try {
    const newPortfolio = new Portfolio({
      title: title,
      description: description,
      imageURL: imageURL
    })
    newPortfolio.save((err) => {
      if (err) {
        res.json(err.message)
      } else {
        res.json(newPortfolio)
      }
    })
  } catch (error) {
    if (error) res.json(error.message)
  }
  
}

// add new entry to employees collections
exports.addEmployee = (req, res, next) => {
  const {fullname, position, imageURL, twitterURL, facebookURL, linkedinURL} = req.body;
  try {
    const newEmployee = new Employee({
      fullname: fullname,
      position: position,
      imageURL: imageURL,
      twitterURL: twitterURL,
      facebookURL: facebookURL,
      linkedinURL: linkedinURL,
    })
    newEmployee.save((err) => {
      if (err) {
        res.json(err.message)
      } else {
        res.json(newEmployee)
      }
    })
  } catch (error) {
    if (error) res.json(error.message)
  }
}