const { check } = require('express-validator');

exports.aboutValidator = [
  check('year')
    .isString()
    .isLength({ min: 3 })
    .withMessage('YEAR MINIMUM IS 5 CHARACTER')
    .trim(),
  check('title')
    .isString()
    .isLength({ min: 3 })
    .withMessage('TITLE MINIMUM IS 3 CHARACTER')
    .trim(),
  check('description')
    .isLength({ min: 5, max: 400 })
    .withMessage('DESCRIPTION MINIMUM IS 5 CHARACTER')
    .trim(),
  check('imageURL')
    .isURL()
    .withMessage('URL INVALID'),
]

exports.portfolioValidator = [
  check('title')
    .isString()
    .isLength({ min: 3 })
    .withMessage('TITLE MINIMUM IS 5 CHARACTER')
    .trim(),
  check('description')
    .isString()
    .isLength({ min: 5, max: 400 })
    .withMessage('DESCRIPTION MINIMUM IS 3 CHARACTER')
    .trim(),
  check('imageURL')
    .isURL()
    .withMessage('URL INVALID'),
]

exports.employeeValidator = [
  check('fullname')
    .isString()
    .isLength({ min: 3 })
    .withMessage('TITLE MINIMUM IS 5 CHARACTER')
    .trim(),
  check('position')
    .isString()
    .isLength({ min: 3 })
    .withMessage('POSITION MINIMUM IS 3 CHARACTER')
    .trim(),
  check('imageURL')
    .isURL()
    .withMessage('IMG URL INVALID'),
  check('twitterURL')
    .isURL()
    .withMessage('TWITTER URL INVALID'),
  check('facebookURL')
    .isURL()
    .withMessage('FACEBOOK URL INVALID'),
  check('linkedinURL')
    .isURL()
    .withMessage('LINKED IN URL INVALID'),
]