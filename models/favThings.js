let mongoose = require('mongoose');

// create a model class
let favThingsSchema = mongoose.Schema({
    name: String,
    description: String
},
{
    collection: "favourite_things"
});

module.exports = mongoose.model('nusrat', favThingsSchema);