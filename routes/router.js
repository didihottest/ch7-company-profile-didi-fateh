// use express module
const express = require('express');
const app = express();
const router = express.Router();
// Get request raw json from postman / api
app.use(express.json());
// Get request form form-urlencoded form postman / api
app.use(express.urlencoded({ extended: true }));
const {getIndex} = require('./../controller/index');
const {getAbouts, getPortfolios, getEmployees} = require('./../controller/api');

// api
router.get('/api/abouts', getAbouts);
router.get('/api/portfolios', getPortfolios);
router.get('/api/employees', getEmployees);

router.get("/", getIndex);


module.exports = router;