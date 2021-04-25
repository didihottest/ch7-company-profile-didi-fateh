const express = require('express');
const app = express();
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const csrf = require('csurf');
const flash = require('connect-flash');
const User = require('./model/user');

const store = new MongoDBStore({
  uri: 'mongodb://localhost:27017/company',
  collection: 'sessions'
})
const csrfProtection = csrf();

// use router as a middleware
const routers = require('./routes/router')
// use express static middleware
app.use(express.static('public'));
// Get request raw json from postman / api
app.use(express.json());
// use express bodyparser to pass data from body
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: false,
  store: store
}))
app.use(csrfProtection);
app.use(flash());

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use((req, res, next) => {
  if (!req.session.user) {
    return next();
  }

  User.findById(req.session.user._id)
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => console.log(err));
})

app.use((req, res, next) => {
  res.locals.isAuthenticated = req.session.isLoggedIn;
  res.locals.csrfToken = req.csrfToken();
  next();
})

app.use(routers)
// use connection module to connect to database from route
app.listen(5000, () => {
  console.log("Server is running at port 5000")
})