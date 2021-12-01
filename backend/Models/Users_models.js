const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    favori: {
        type: Boolean,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    note: {
        type: Number,
        required: true
    },
    genre: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('users_models', UserSchema);