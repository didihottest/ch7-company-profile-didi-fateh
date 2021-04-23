const {
  Contact
} = require('./../model/api')
var axios = require('axios')
exports.getIndex = (req, res, next) => {
  axios.all([
    axios.get('http://localhost:5000/api/abouts'),
    axios.get('http://localhost:5000/api/portfolios'),
    axios.get('http://localhost:5000/api/employees'),
  ]).then(axios.spread((abouts, portfolios, employees) => {
    res.render('index', {
      abouts:abouts.data,
      portfolios:portfolios.data,
      employees:employees.data
    })
  })).catch(error => {
    console.log(error);
  });
}

exports.postAddAbout = (req, res, next) => {
  res.render('about', {
    location:"http://localhost:5000/api/addabout"
  })
}

exports.postEditAbout = (req, res, next) => {
  const id = req.params.id
  res.render('about', {
    location:`http://localhost:5000/api/editportabout/${id}`
  })
}

exports.postAddPortfolio = (req, res, next) => {
  res.render('portfolio', {
    location:"http://localhost:5000/api/addportfolio"
  })
}

exports.postEditPortfolio = (req, res, next) => {
  const id = req.params.id
  res.render('portfolio', {
    location:`http://localhost:5000/api/editportfolio/${id}`
  })
}

exports.postAddEmployee = (req, res, next) => {
  res.render('employee', {
    location:"http://localhost:5000/api/addemployee"
  })
}

exports.postEditEmployee = (req, res, next) => {
  const id = req.params.id
  res.render('employee', {
    location:`http://localhost:5000/api/editemployee/${id}`
  })
}