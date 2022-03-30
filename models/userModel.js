const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {type: String, require},
    email: {type: String, require},
    password: {type: String, require},
    address: {type: String, require, default: ""},
    isAdmin: {type: Boolean, require, default: false}
}, {
    timestamps: true
});

module.exports = mongoose.model('user', userSchema);