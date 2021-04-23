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
      abouts: abouts.data,
      portfolios: portfolios.data,
      employees: employees.data
    })
  })).catch(error => {
    console.log(error);
  });
}

exports.getAddAbout = (req, res, next) => {
  res.render('about', {
    location: "http://localhost:5000/postaddabout"
  })
}

exports.getEditAbout = (req, res, next) => {
  const id = req.params.id
  res.render('about', {
    location: `http://localhost:5000/posteditabout/${id}`
  })
}

exports.getAddPortfolio = (req, res, next) => {
  res.render('portfolio', {
    location: "http://localhost:5000/postaddportfolio"
  })
}

exports.getEditPortfolio = (req, res, next) => {
  const id = req.params.id
  res.render('portfolio', {
    location: `http://localhost:5000/posteditportfolio/${id}`
  })
}

exports.getAddEmployee = (req, res, next) => {
  res.render('employee', {
    location: "http://localhost:5000/postaddemployee"
  })
}

exports.getEditEmployee = (req, res, next) => {
  const id = req.params.id
  res.render('employee', {
    location: `http://localhost:5000/posteditemployee/${id}`
  })
}


//edit post
exports.postEditAbout = (req, res, next) => {
  const id = req.params.id
  const { year, title, description, imageURL } = req.body
  axios.post(`http://localhost:5000/api/editabout/${id}`, {
    year: year,
    title: title,
    description: description,
    imageURL: imageURL
  }).then((response) => {
    console.log(response.data.message)
    res.redirect('/')
  })
}
exports.postEditEmployee = (req, res, next) => {
  const id = req.params.id
  const { fullname, position, imageURL, twitterURL, facebookURL, linkedinURL } = req.body;
  axios.post(`http://localhost:5000/api/editemployee/${id}`, {
    fullname: fullname,
    position: position,
    imageURL: imageURL,
    twitterURL: twitterURL,
    facebookURL: facebookURL,
    linkedinURL: linkedinURL,
  }).then((response) => {
    console.log(response.data.message)
    res.redirect('/')
  })
}
exports.postEditPortfolio = (req, res, next) => {
  const id = req.params.id
  const { title, description, imageURL } = req.body;
  axios.post(`http://localhost:5000/api/editportfolio/${id}`, {
    title: title,
    description: description,
    imageURL: imageURL
  }).then((response) => {
    console.log(response.data.message)
    res.redirect('/')
  })
}
// add post
exports.postAddAbout = (req, res, next) => {
  const { year, title, description, imageURL } = req.body
  axios.post(`http://localhost:5000/api/addabout`, {
    year: year,
    title: title,
    description: description,
    imageURL: imageURL
  }).then((response) => {
    console.log(response.data.message)
    res.redirect('/')
  })
}
exports.postAddEmployee = (req, res, next) => {
  const { fullname, position, imageURL, twitterURL, facebookURL, linkedinURL } = req.body;
  axios.post(`http://localhost:5000/api/addemployee`, {
    fullname: fullname,
    position: position,
    imageURL: imageURL,
    twitterURL: twitterURL,
    facebookURL: facebookURL,
    linkedinURL: linkedinURL,
  }).then((response) => {
    console.log(response.data.message)
    res.redirect('/')
  })
}
exports.postAddPortfolio = (req, res, next) => {
  const { title, description, imageURL } = req.body;
  axios.post(`http://localhost:5000/api/addportfolio`, {
    title: title,
    description: description,
    imageURL: imageURL
  }).then((response) => {
    console.log(response.data.message)
    res.redirect('/')
  })
}

// delete post

exports.postDeleteAbout = (req, res, next) => {
  const id = req.params.id
  axios.post(`http://localhost:5000/api/deleteabout/${id}`).then((response) => {
    console.log(response.data.message)
    res.redirect('/')
  })
}
exports.postDeleteEmployee = (req, res, next) => {
  const id = req.params.id
  axios.post(`http://localhost:5000/api/deleteemployee/${id}`)
  .then((response) => {
    console.log(response.data.message)
    res.redirect('/')
  })
}
exports.postDeletePortfolio = (req, res, next) => {
  const id = req.params.id
  axios.post(`http://localhost:5000/api/deleteportfolio/${id}`)
  .then((response) => {
    console.log(response.data.message)
    res.redirect('/')
  })
}