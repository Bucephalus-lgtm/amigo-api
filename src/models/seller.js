const mongoose = require('mongoose');

const sellerSchema = new mongoose.Schema(
    {
        name: {
            type: String
        },
        email: {
            type: String
        },
        password: {
            type: String
        },
        phone: {
            type: Number
        },
        pin: {
            type: Number
        },
        coordintes: {
            type: String
        },
        type: String,
    },
    { timestamps: true }
);

module.exports = mongoose.model('seller', sellerSchema);