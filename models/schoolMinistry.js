var mongoose  = require('mongoose')

var schoolMinistrySchema = new mongoose.Schema({
    schoolUrl: String,
    schoolDescription: String
});

module.exports = mongoose.model('Schoolministry',schoolMinistrySchema)