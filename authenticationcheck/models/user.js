const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(    // nosql simple schema for user
    {
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    }
});

const User = mongoose.model('User',userSchema);  // keeping model name Capital // very important
module.exports = User;