const express = require("express");
const app = express();
const bodyParser = require('body-parser');
var testVar = "";
var bmi = 0;
var name = "";
app.set('view engine', 'ejs')

app.get("/", function(request, response) {
  response.render("home");
});

app.get("/login", function(request, response) {
    response.render("login", {testVar, bmi, name});
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/login", async (req, res) => {
    name =  req.body.name;
    var height =  req.body.height;
    var weight =  req.body.weight;
    bmi = 703 * (weight / (height * height));
    if (bmi < 18.5) {
        testVar = `underweight`;
        res.redirect("/login");
    } else if (bmi > 25) {
        testVar = `overweight`;
        res.redirect("/login");
    } else {
        testVar = `healthy`;
        res.redirect("/login");
    }
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});