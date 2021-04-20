const {
    About,
    Portfolio,
    Employee
} = require('./model/api')

const abouts = About.find()
const portfolios = Portfolio.find()
const employees = Employee.find()

// abouts.then((x) => {
//     portfolios.then((y) => {
//         employees.then((z) => {
//             console.log(`BELOW IS ABOUT\n${x}`)
//             console.log(`BELOW IS PORTFOLIO\n${y}`)
//             console.log(`BELOW IS EMPLOYEE\n${z}`)
//         })
//     })
// })

let arr = ["tiga", "dua", "satu"]

const splitArray = require('./utils/helper')

console.log(splitArray(arr))
// About.find()
//     .then(arrDocs => {
//       Portfolio.find()


//       function splitArray(x) {
//         let ganjil = [],
//           genap = [];
//         for (let i = 0; i < x.length; i++)
//           (i % 2 == 0 ? ganjil : genap).push(x[i]);
//         return [ganjil, genap];
//       }
//       let abouts = splitArray(arrDocs);
//       res.render('index', {
//         about: abouts,
//       })
//     })
//   Portfolio.find()
//     .then(portfolios => {
//       res.render('index', {
//         portfolio: portfolios
//       })
//     })