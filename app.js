var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var db = require('./mySQL');

var crU = require('./User/createUser.js');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/createuser", function(req, res){
  console.log("create user");
  var userName = req.body.userName;
  var email = req.body.email;
  crU.createUser(userName, email, function(err, result){
    console.log(result);
    res.send(result);
  });
});

module.exports = app;
