const {
  About,
  Portfolio,
  Employee
} = require('./../model/api')

const splitArray = require('../utils/helper');

exports.getIndex = (req, res, next) => {
  const abouts = About.find()
  const portfolios = Portfolio.find()
  const employees = Employee.find()

  abouts.then((w) => {
    portfolios.then((y) => {
      employees.then((z) => {
        const x = splitArray(w);
        res.render('index', {
          about: x,
          portfolio: y,
          employee: z
        })
      })
    })
  })
}