var mongoose = require('mongoose')

var homeMinistrySchema = new mongoose.Schema({
    url: String,
    description: String
});

module.exports = mongoose.model('Homeministry',homeMinistrySchema)