const {
  Contact
} = require('./../model/api')
var axios = require('axios')
const { validationResult } = require('express-validator');


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
    location: "http://localhost:5000/postaddabout",
    editmode: false
  })
}

// add api
exports.getAddPortfolio = (req, res, next) => {
  res.render('portfolio', {
    location: "http://localhost:5000/postaddportfolio",
    editmode: false
  })
}

exports.getAddEmployee = (req, res, next) => {
  res.render('employee', {
    location: "http://localhost:5000/postaddemployee",
    editmode: false
  })
}
// get edit
exports.getEditAbout = (req, res, next) => {
  const id = req.params.id
  axios.get(`http://localhost:5000/api/about/${id}`).then((response) => {
    res.render('about', {
      location: `http://localhost:5000/posteditabout/${id}`,
      editmode: true,
      year: response.data[0].year,
      title: response.data[0].title,
      description: response.data[0].description,
      imageURL: response.data[0].imageURL,
      errorMessage: null,
      validationErrors: []
      
    })
  }).catch((error) => {
    if (error) console.log(error.message)
  })
}

exports.getEditPortfolio = (req, res, next) => {
  const id = req.params.id
  axios.get(`http://localhost:5000/api/portfolio/${id}`).then((response) => {
    res.render('portfolio', {
      location: `http://localhost:5000/posteditportfolio/${id}`,
      editmode: true,
      title: response.data[0].title,
      description: response.data[0].description,
      imageURL: response.data[0].imageURL
    })
  }).catch((error) => {
    if (error) console.log(error.message)
  })

}

exports.getEditEmployee = (req, res, next) => {
  const id = req.params.id
  axios.get(`http://localhost:5000/api/employee/${id}`).then((response) => {
    res.render('employee', {
      location: `http://localhost:5000/posteditemployee/${id}`,
      editmode: true,
      fullname: response.data[0].fullname,
      position: response.data[0].position,
      imageURL: response.data[0].imageURL,
      twitterURL: response.data[0].twitterURL,
      facebookURL: response.data[0].facebookURL,
      linkedinURL: response.data[0].linkedinURL,
    })
  }).catch((error) => {
    if (error) console.log(error.message)
  })
}


//edit post
exports.postEditAbout = (req, res, next) => {
  const id = req.params.id
  const { year, title, description, imageURL } = req.body
  const errors = validationResult(req);
  console.log(!errors.isEmpty())
  if (!errors.isEmpty()) {
    console.log(errors.array());
    return axios.get(`http://localhost:5000/api/about/${id}`).then((response) => {
      res.render('about', {
        location: `http://localhost:5000/posteditabout/${id}`,
        editmode: true,
        year: response.data[0].year,
        title: response.data[0].title,
        description: response.data[0].description,
        imageURL: response.data[0].imageURL,
        errorMessage: errors.array()[0].msg,
        validationErrors: errors.array()
      })
    }).catch((error) => {
      if (error) console.log(error.message)
    })
  } else {
    axios.post(`http://localhost:5000/api/editabout/${id}`, {
      year: year,
      title: title,
      description: description,
      imageURL: imageURL
    }).then((response) => {
      res.redirect('/#about')
    })
  }
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
    res.redirect('/#team')
  }).catch((error) => {
    if (error) console.log(error.message)
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
    res.redirect('/#portfolio')
  }).catch((error) => {
    if (error) console.log(error.message)
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
  }, {
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'X-CSRFToken': req.csrfToken(),
    }
  }).then((response) => {
    res.redirect('/#about')
  }).catch((error) => {
    if (error) console.log(error.message)
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
    res.redirect('/#team')
  }).catch((error) => {
    if (error) console.log(error.message)
  })
}
exports.postAddPortfolio = (req, res, next) => {
  const { title, description, imageURL } = req.body;
  axios.post(`http://localhost:5000/api/addportfolio`, {
    title: title,
    description: description,
    imageURL: imageURL
  }).then((response) => {
    res.redirect('/#portfolio')
  }).catch((error) => {
    if (error) console.log(error.message)
  })
}

// delete post

exports.postDeleteAbout = (req, res, next) => {
  const id = req.params.id
  axios.post(`http://localhost:5000/api/deleteabout/${id}`).then((response) => {
    res.redirect('/#about')
  }).catch((error) => {
    if (error) console.log(error.message)
  })
}
exports.postDeleteEmployee = (req, res, next) => {
  const id = req.params.id
  axios.post(`http://localhost:5000/api/deleteemployee/${id}`)
    .then((response) => {
      res.redirect('/#team')
    }).catch((error) => {
      if (error) console.log(error.message)
    })
}
exports.postDeletePortfolio = (req, res, next) => {
  const id = req.params.id
  axios.post(`http://localhost:5000/api/deleteportfolio/${id}`)
    .then((response) => {
      res.redirect('/#portfolio')
    }).catch((error) => {
      if (error) console.log(error.message)
    })
}