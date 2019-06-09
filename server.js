//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");


const app = express();
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var sum = num1 + num2;

  res.send("The Calculated Value is " + sum);
});
app.get("/bmi", function (req, res) {
  res.sendFile(__dirname + "/bmicalculator.html");
});

app.post("/bmi", function (req, res) {
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);
  var bmi = weight / (height * height);
  console.log(bmi);
  res.send("The BMI Calculated Value is " + bmi);
});

app.listen(3000, function() {
  console.log("Server running on 3000");
});
