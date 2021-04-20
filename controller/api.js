// use express module
const express = require('express');
const app = express();
const {About, Portfolio, Employee} = require('./../model/api')
const multer = require('multer');
// Get request raw json from postman / api
app.use(express.json());
// Get request form form-urlencoded form postman / api
app.use(express.urlencoded({ extended: true }));
// display all about entry from database
exports.getAbouts = async (req, res, next) => {
  await About.find().exec((err, about)=>{
    res.json(about)
  })
}

// display all portfolio entry from database
exports.getPortfolios = async (req, res, next) => {
  await Portfolio.find().exec((err, portfolios)=>{
    res.json(portfolios)
  })
}

// display all employees entry from database
exports.getEmployees = async (req, res, next) => {
  await Employee.find().exec((err, employees)=>{
    res.json(employees)
  })
}

