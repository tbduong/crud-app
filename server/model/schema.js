var mongoose = require('mongoose');

var showSchema = mongoose.Schema({
    title: { type: String},
    platform: { type: String}
});

//export this schema to be accessed in server.js
module.express=mongoose.model('show', showSchema);