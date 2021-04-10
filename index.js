//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");

const app =  express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"))

app.set("view engine", "ejs")

app.get("/", function(req, res){
    res.render("home");
});

app.get("/about", function(req, res){
    res.render("about");
});

app.get("/t/:title", function(req, res){
    // res.render("template");
    res.render("template", {title: req.params.title});
});

app.get("/portfolio", function(req, res){
    res.render("portfolio");
});

app.listen(9000, function(){
    console.log("Listening on port 9000");
});
