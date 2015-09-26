var mongoose = require('mongoose');
// var Schema = mongoose.Schema;
var friends = new mongoose.Schema({
	name: String,
	age: Number
});
friends.path('name').required(true, "Friend's name can not be empty!!!");
friends.path('age').required(true, "Friend's must have a age!!!");
mongoose.model("friends", friends);