"use strict";

var express = require('express');
var app = express();
var morgan = require('morgan');
var bodyParser = require('body-parser');
var swig = require('swig');


var methodOverride = require('method-override');
var path = require('path');

//swig stuff

swig.setDefaults({cache: false});

app.engine('html', swig.renderFile);
app.set('view engine', 'html');



app.use('/static', express.static(path.join(__dirname, 'public')));
app.use('/vendor', express.static( path.join(__dirname, 'node_modules')));

app.use(bodyParser.urlencoded({extended: false}));

app.use('/', require('./routes'));

app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// handle all errors (anything passed into `next()`)
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    console.log({error: err});
    res.send('error');
});

module.exports=app;