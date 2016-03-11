var express = require('express');
var router = express.Router();

var Promise = require('bluebird');
var mongoose = require('mongoose');
var models = require('../models');

var Hotel = models.Hotel;
var Activity = models.Activity;
var Restaurant = models.Restaurant;


router.get('/', function(req, res, next) {
 //  console.log(req.body);
 // res.send('heelloooo');
 var foundHotels;
  var foundActiv;
   var foundRest;
  Hotel.find({}).then(function(hotels){
    foundHotels=hotels;
    return Activity.find({})
  }).then(function(activities){
    foundActiv=activities;
    return Restaurant.find({})
  }).then(function(restaurants){
    foundRest=restaurants;
  }).then(function(success){


      res.render('index',{Hotels:foundHotels, Activities:foundActiv,Restaurants:foundRest})
  }).catch(function(err){
    console.log(err);
    debugger
  })

});








module.exports = router;