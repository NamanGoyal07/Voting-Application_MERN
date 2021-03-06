const mongoose = require('mongoose');

mongoose.set('debug', true);
mongoose.Promise = global.Promise;

// mongoose.connect('mongodb://localhost/vote-mern');
mongoose.connect(process.env.DB_CONNECT,{ useNewUrlParser: true }, ()=>{
    console.log("Successfully connected to database");
});

module.exports.User = require('./user');
module.exports.Poll = require('./polls');


