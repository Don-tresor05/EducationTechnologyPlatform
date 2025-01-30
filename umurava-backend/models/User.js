const { default: mongoose } = require('mongoose');
const momgoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String, 
    email: String,
    password: String,
    role: String,
});

module.exports = mongoose.model('User', userSchema);