const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// start mongoDB here
const userSchema = mongoose.model('user',
    new Schema({
        name:String,
        password:String,
        created_at:String
    })
);

module.exports = userSchema;
