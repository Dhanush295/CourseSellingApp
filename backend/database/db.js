const mongoose = require("mongoose");


const AdminSchema = new mongoose.Schema({
    username: String,
    password: String
})

const ADMIN = mongoose.model('Admin', AdminSchema);
module.exports = { ADMIN };