const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/f2c", function(req, res){
  res.sendFile(__dirname + "/hmwk.html");
});

app.post("/fc2", function(req, res){


//Based on the code from BMI Calculator, write a simple web page to compute the volume of a cylinder - pi*(r^2)*h
//The Web Form, with title Volume Cylinder, should have a GET method to accept two field entries for radius and height
//The Web Form should have a POST method using a Calculate button, that calculates the volume and displays as a field on the web page
//Use the formula for computation of volume = pi*(r^2)*h and display the volume on a separate page, as number formatted to 2 decimal places
//Ensure that you use Express, use /VolCalc as path, a file called index.js as the main js file, VolCalculator.html as the html display page 
//Use the JavaScript Math.PI function to determine value of pi and use the Math.pow to raise the value of r to the power of 2

app.listen(3000, function() {
  console.log ("Server is running on port 3000")
});