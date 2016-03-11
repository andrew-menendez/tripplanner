var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/tripplanner');


// <= db name will be 'wikistack'
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongodb connection error:'));

//Schemas

var Place = new Schema({
      address:{type:String},
      city:{type:String},
      state:{type:String},
      phone: {type:String},
      location: {type:[Number]}
});




var Hotel = new Schema({
      name: {type:String},
      place: [Place],
      num_stars:{type:Number},
      amenities: [String]
});


var Activity = new Schema({
      name:{type:String},
      place: [Place],
      age_range: {type:String}
});


var Restaurant = new Schema({
      name:{type:String},
       place: [Place],
      cuisine: [String],
      price: {type:Number}
});


var Place = mongoose.model('Place', Place);
var Hotel = mongoose.model('Hotel', Hotel);
var Activity = mongoose.model('Activity', Activity);
var Restaurant = mongoose.model('Restaurant', Restaurant);

module.exports = {
  Place:Place,
  Hotel:Hotel,
  Activity:Activity,
  Restaurant:Restaurant
};

