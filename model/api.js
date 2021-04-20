// use mongoose ODM 
const mongoose = require('mongoose');
// use connection module to connect to database from route
require('./../config/db-connection')

const Schema = mongoose.Schema;
// create new employee schema
const EmployeeSchema = new Schema({
  fullname: {
    type: String,
    required: true
  },
  position:{
    type: String,
    required:true
  },
  imageURL:{
    type: String, 
    required:true
  },
  twitterURL:{
    type: String, 
    required:true
  },
  facebookURL:{
    type: String, 
    required:true
  },
  linkedinURL:{
    type: String, 
    required:true
  },
})

// create employee model from schema
const Employee = mongoose.model('employee', EmployeeSchema);

// create new portfolio schema
const PortfolioSchema = new Schema({
  title:{
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imageURL: {
    type: String,
    required: true
  }
})

// create model from schema
const Portfolio = mongoose.model('portfolio', PortfolioSchema);

// create About schema
const AboutSchema = new Schema({
  year:{
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imageURL: {
    type: String,
    required: true
  }
})
// create model from schema
const About = mongoose.model('about', AboutSchema);

module.exports = {About, Portfolio, Employee}