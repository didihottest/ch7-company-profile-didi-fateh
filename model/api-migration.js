// use mongoose ODM 
const mongoose = require('mongoose');
// use connection module to connect to database from route
require('./../config/db-connection')

const {About, Portfolio, Employee} = require('./api')

const About_Data = [
  {
    year: "2009-2011",
    title: "Our Humble Beginnings",
    desciption:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!",
    imageURL:"assests/img/about/1.img"
  },
  {
    year: "March 2011",
    title: "An Agency is Born",
    desciption:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!",
    imageURL:"assets/img/about/2.jpg"
  },
  {
    year: "December 2012",
    title: "Transition to Full Service",
    desciption:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!",
    imageURL:"assets/img/about/3.jpg"
  },
  {
    year: "July 2014",
    title: "Phase Two Expansion",
    desciption:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!",
    imageURL:"assets/img/about/4.jpg"
  },
]

About.insertMany(About_Data, (error, docs) => {
  if (error){
    console.log(error.message)
  } else {
    console.log(docs)
  }
})

const Portfolio_Data = [
  {
    title: "Threads",
    description: "Illustration",
    imageURL: "assets/img/portfolio/01-thumbnail.jpg"
  },
  {
    title: "Explore",
    description: "Graphic Design",
    imageURL: "assets/img/portfolio/02-thumbnail.jpg"
  },
  {
    title: "Finish",
    description: "Identity",
    imageURL: "assets/img/portfolio/03-thumbnail.jpg"
  },
  {
    title: "Lines",
    description: "Branding",
    imageURL: "assets/img/portfolio/04-thumbnail.jpg"
  },
  {
    title: "Southwest",
    description: "Website Design",
    imageURL: "assets/img/portfolio/05-thumbnail.jpg"
  },
  {
    title: "Window",
    description: "Photography",
    imageURL: "assets/img/portfolio/06-thumbnail.jpg"
  }
]

Portfolio.insertMany(Portfolio_Data, (error, docs) => {
  if (error){
    console.log(error.message)
  } else {
    console.log(docs)
  }
})

const Employee_Data = [
  {
    fullname: "Kay Garland",
    position: "Lead Designer",
    imageURL: "assets/img/team/1.jpg",
    twitterURL: "www.twitter.com",
    facebookURL: "www.facebook.com",
    linkedinURL: "www.linkedin.com",
  },
  {
    fullname: "Larry Parker",
    position: "Lead Marketer",
    imageURL: "assets/img/team/2.jpg",
    twitterURL: "www.twitter.com",
    facebookURL: "www.facebook.com",
    linkedinURL: "www.linkedin.com",
  },
  {
    fullname: "Diana Petersen",
    position: "Lead Developer",
    imageURL: "assets/img/team/3.jpg",
    twitterURL: "www.twitter.com",
    facebookURL: "www.facebook.com",
    linkedinURL: "www.linkedin.com",
  },
]

Employee.insertMany(Employee_Data, (error, docs) => {
  if (error){
    console.log(error.message)
  } else {
    console.log(docs)
  }
})