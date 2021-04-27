// use express module
const express = require('express');
const app = express();
const { About, Portfolio, Employee, Contact } = require('./../model/api')
// Get request raw json from postman / api
app.use(express.json());
// Get request form form-urlencoded form postman / api
app.use(express.urlencoded({ extended: true }));

// display API for all collections
// display all about entry from database
exports.getAbouts = (req, res, next) => {
  About.find().exec((err, about) => {
    res.json(about)
  })
}

// display all portfolio entry from database
exports.getPortfolios = (req, res, next) => {
  Portfolio.find().exec((err, portfolios) => {
    res.json(portfolios)
  })
}

// display all employees entry from database
exports.getEmployees = (req, res, next) => {
  Employee.find().exec((err, employees) => {
    res.json(employees)
  })
}

// display one entry
// display all about entry from database
exports.getAbout = (req, res, next) => {
  const id = req.params.id
  About.find({ _id: id }).exec((err, about) => {
    res.json(about)
  })
}

// display all portfolio entry from database
exports.getPortfolio = (req, res, next) => {
  const id = req.params.id
  Portfolio.find({ _id: id }).exec((err, portfolios) => {
    res.json(portfolios)
  })
}

// display all employees entry from database
exports.getEmployee = (req, res, next) => {
  const id = req.params.id
  Employee.find({ _id: id }).exec((err, employees) => {
    res.json(employees)
  })
}

//all endpoint for add new data to collections
// add new contact message entry
exports.addContact = (req, res, next) => {
  const { name, email, phone, message } = req.body;
  try {
    const newContact = new Contact({
      name: name,
      email: email,
      phone: phone,
      message: message
    })
    newContact.save((err) => {
      if (err) {
        res.json(err.message)
      } else {
        res.json(newContact)
      }
    })
  } catch (error) {
    if (error) res.json(error.message)
  }
}


// add new entry to about collection
exports.addAbout = (req, res, next) => {
  const { year, title, description, imageURL } = req.body;
  try {
    const newAbout = new About({
      year: year,
      title: title,
      description: description,
      imageURL: imageURL
    })
    newAbout.save((err) => {
      if (err) {
        res.json(err.message)
      } else {
        res.json(newAbout)
      }
    })
  } catch (error) {
    if (error) res.json(error.message)
  }
}

// add new entry to portfolios collection
exports.addPortfolio = (req, res, next) => {
  const { title, description, imageURL } = req.body;
  try {
    const newPortfolio = new Portfolio({
      title: title,
      description: description,
      imageURL: imageURL
    })
    newPortfolio.save((err) => {
      if (err) {
        res.json(err.message)
      } else {
        res.json(newPortfolio)
      }
    })
  } catch (error) {
    if (error) res.json(error.message)
  }

}

// add new entry to employees collections
exports.addEmployee = (req, res, next) => {
  const { fullname, position, imageURL, twitterURL, facebookURL, linkedinURL } = req.body;
  try {
    const newEmployee = new Employee({
      fullname: fullname,
      position: position,
      imageURL: imageURL,
      twitterURL: twitterURL,
      facebookURL: facebookURL,
      linkedinURL: linkedinURL,
    })
    newEmployee.save((err) => {
      if (err) {
        res.json(err.message)
      } else {
        res.json(newEmployee)
      }
    })
  } catch (error) {
    if (error) res.json(error.message)
  }
}

// all api for edit entry on specific collection
// edit entry to about collection
exports.editAbout = async (req, res, next) => {
  const id = req.params.id;
  const { year, title, description, imageURL } = req.body;
  try {
    const updateAbout = await About.findOneAndUpdate(
      { _id: id },
      {
        year: year,
        title: title,
        description: description,
        imageURL: imageURL
      },
      { runValidators: true }
    );
    res.json({
      message: "successfully updated"
    })
  } catch (error) {
    if (error) res.json(error.message)
  }
}

// edit entry to portfolios collection
exports.editPortfolio = async (req, res, next) => {
  const id = req.params.id;
  const { title, description, imageURL } = req.body;
  try {
    const updatePortfolio = await Portfolio.findOneAndUpdate(
      { _id: id },
      {
        title: title,
        description: description,
        imageURL: imageURL
      },
      { runValidators: true }
    )
    res.json({
      message: "successfully updated"
    })
  } catch (error) {
    if (error) res.json(error.message)
  }
}

// edit entry to employees collections
exports.editEmployee = async (req, res, next) => {
  const id = req.params.id;
  const { fullname, position, imageURL, twitterURL, facebookURL, linkedinURL } = req.body;
  try {
    const updateEmployee = await Employee.findOneAndUpdate(
      { _id: id },
      {
        fullname: fullname,
        position: position,
        imageURL: imageURL,
        twitterURL: twitterURL,
        facebookURL: facebookURL,
        linkedinURL: linkedinURL,
      },
      { runValidators: true }
    )
    res.json({
      message: "successfully updated"
    })
  } catch (error) {
    if (error) res.json(error.message)
  }
}

// all delete api controller
// about entry collection delete

exports.deleteAbout = async (req, res, next) => {
  const id = req.params.id;
  try {
    const updateAbout = await About.findOneAndDelete(
      { _id: id }
    );
    res.json({
      message: "successfully deleted",
      deleted: id
    })
  } catch (error) {
    if (error) res.json(error.message)
  }
}

// edit entry to portfolios collection
exports.deletePortfolio = async (req, res, next) => {
  const id = req.params.id;
  try {
    const updatePortfolio = await Portfolio.findOneAndDelete(
      { _id: id }
    )
    res.json({
      message: "successfully deleted",
      deleted: id
    })
  } catch (error) {
    if (error) res.json(error.message)
  }

}

// edit entry to employees collections
exports.deleteEmployee = async (req, res, next) => {
  const id = req.params.id;
  try {
    const updateEmployee = await Employee.findOneAndDelete(
      { _id: id }
    )
    res.json({
      message: "successfully deleted",
      deleted: id
    })
  } catch (error) {
    if (error) res.json(error.message)
  }
}