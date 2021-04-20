// use express module
const express = require('express');
const app = express();
const router = express.Router();
// Get request raw json from postman / api
app.use(express.json());
// Get request form form-urlencoded form postman / api
app.use(express.urlencoded({ extended: true }));
const {getIndex} = require('./../controller/index');

router.get("/", getIndex);


module.exports = router;