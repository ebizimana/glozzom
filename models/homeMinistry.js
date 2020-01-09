var mongoose = require('mongoose')

var homeMinistrySchema = new mongoose.Schema({
    homeurl: String,
    description: String
});

module.exports = mongoose.model('Homeministry',homeMinistrySchema)