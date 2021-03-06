const mongoose = require("mongoose")
const { softDeletePlugin } = require('soft-delete-plugin-mongoose');

const UserVerification = new mongoose.Schema({
    userId: String,
    otp: String,
    createdAt:String,
    expiredAt: String,
})
UserVerification.plugin(softDeletePlugin);

module.exports = mongoose.model('userverification', UserVerification)