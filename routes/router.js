// use express module
const express = require('express');
const app = express();
const multer = require('multer')
const router = express.Router();
// Get request raw json from postman / api
app.use(express.json());
// Get request form form-urlencoded form postman / api
app.use(express.urlencoded({ extended: true }));
const {getIndex} = require('./../controller/index');
const {
  getAbouts, getPortfolios, getEmployees, 
  addAbout, addPortfolio, addEmployee} = require('./../controller/api');

// api get
router.get('/api/abouts', getAbouts);
router.get('/api/portfolios', getPortfolios);
router.get('/api/employees', getEmployees);
// api post new data
router.post('/api/addabout', multer().none(), addAbout);
router.post('/api/addportfolio', multer().none(), addPortfolio);
router.post('/api/addemployee', multer().none(), addEmployee);




router.get("/", getIndex);


module.exports = router;