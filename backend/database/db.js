const mongoose = require("mongoose");
const { string } = require("zod");


const AdminSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
})

const UserSchema = new mongoose.Schema({
    username: String,
    password: String
})

const ADMIN = mongoose.model('Admin', AdminSchema);
const USERS = mongoose.model('User', UserSchema);
module.exports = { ADMIN, USERS };