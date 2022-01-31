const mongoose = require('mongoose');

var mongoURL = "mongodb+srv://chinmay:asd123@cluster0.v8b92.mongodb.net/tiffin_quest_db";

mongoose.connect(mongoURL, {useUnifiedTopology: true, useNewUrlParser: true});

var db = mongoose.connection;

db.on('connected', ()=>{
    console.log('MongoDB Connected Successfully!!');
})

db.on('error', ()=>{
    console.log('Error Connecting MongoDB');
});

module.exports = mongoose;