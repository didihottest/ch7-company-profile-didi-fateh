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
  addAbout, addPortfolio, addEmployee,
  editAbout, editPortfolio, editEmployee} = require('./../controller/api');

// api get
router.get('/api/abouts', getAbouts);
router.get('/api/portfolios', getPortfolios);
router.get('/api/employees', getEmployees);
// api post new data
router.post('/api/addabout', multer().none(), addAbout);
router.post('/api/addportfolio', multer().none(), addPortfolio);
router.post('/api/addemployee', multer().none(), addEmployee);
// api post edit data
router.post('/api/editabout/:id', multer().none(), editAbout);
router.post('/api/editportfolio/:id', multer().none(), editPortfolio);
router.post('/api/editemployee/:id', multer().none(), editEmployee);



router.get("/", getIndex);


module.exports = router;