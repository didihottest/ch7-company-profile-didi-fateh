const express = require('express');
const app = express();
// use router as a middleware
const routers = require('./routes/router')
// use express static middleware
app.use(express.static('public'));
// Get request raw json from postman / api
app.use(express.json());
// use express bodyparser to pass data from body
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(routers)

app.listen(5000, ()=>{
  console.log("Server is running at port 5000")
})