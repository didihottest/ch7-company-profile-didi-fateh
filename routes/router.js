// use express module
const express = require('express');
const app = express();
const multer = require('multer')
const isAuth = require('../middleware/is-auth');
const router = express.Router();
// Get request raw json from postman / api
app.use(express.json());
// Get request form form-urlencoded form postman / api
app.use(express.urlencoded({ extended: true }));
const {
  getIndex, getAddAbout, getEditAbout,
  getAddPortfolio, getEditPortfolio,
  getAddEmployee, getEditEmployee,
  postEditAbout, postEditEmployee, postEditPortfolio,
  postAddAbout, postAddEmployee, postAddPortfolio,
  postDeleteAbout, postDeleteEmployee, postDeletePortfolio } = require('./../controller/index');
const {
  getAbouts, getPortfolios, getEmployees,
  getAbout, getPortfolio, getEmployee,
  addAbout, addPortfolio, addEmployee, addContact,
  editAbout, editPortfolio, editEmployee,
  deleteAbout, deletePortfolio, deleteEmployee } = require('./../controller/api');

const {getSignup, postSignup, getLogin, postLogin, postLogout} = require('../controller/auth')

// api get
router.get('/api/abouts', getAbouts);
router.get('/api/portfolios', getPortfolios);
router.get('/api/employees', getEmployees);
router.get('/api/about/:id', getAbout);
router.get('/api/portfolio/:id', getPortfolio);
router.get('/api/employee/:id', getEmployee);
// api post new data
router.post('/api/addabout', multer().none(), addAbout);
router.post('/api/addportfolio', multer().none(), addPortfolio);
router.post('/api/addemployee', multer().none(), addEmployee);
router.post('/api/addcontact', multer().none(), addContact);
// api post edit data
router.post('/api/editabout/:id', multer().none(), editAbout);
router.post('/api/editportfolio/:id', multer().none(), editPortfolio);
router.post('/api/editemployee/:id', multer().none(), editEmployee);
// api post delete data
router.post('/api/deleteabout/:id', deleteAbout);
router.post('/api/deleteportfolio/:id', deletePortfolio);
router.post('/api/deleteemployee/:id', deleteEmployee);
// crud dashboard
router.get("/", isAuth, getIndex);
router.get('/addabout', isAuth, getAddAbout)
router.get('/editabout/:id', isAuth, getEditAbout)
router.get('/addportfolio', isAuth, getAddPortfolio)
router.get('/editportfolio/:id', isAuth, getEditPortfolio)
router.get('/addemployee', isAuth, getAddEmployee)
router.get('/editemployee/:id', isAuth, getEditEmployee)
router.post('/posteditabout/:id', isAuth, postEditAbout)
router.post('/posteditportfolio/:id', isAuth, postEditPortfolio)
router.post('/posteditemployee/:id', isAuth, postEditEmployee)
router.post('/postaddabout', isAuth, postAddAbout)
router.post('/postaddportfolio', isAuth, postAddPortfolio)
router.post('/postaddemployee', isAuth, postAddEmployee)
router.post('/postdeleteabout/:id', isAuth, postDeleteAbout)
router.post('/postdeleteportfolio/:id', isAuth, postDeletePortfolio)
router.post('/postdeleteemployee/:id', isAuth, postDeleteEmployee)

// login page
router.get('/login', getLogin);
router.post('/login', postLogin);

router.get('/signup', getSignup);
router.post('/signup', postSignup);

router.post('/logout', postLogout);

module.exports = router;