const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
});

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    purchasedCourses: [{type: mongoose.Schema.Types.ObjectId, ref: 'COURSES' }]
});

const Courses = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    link: String,
    published: Boolean
});

const ADMIN = mongoose.model('Admin', AdminSchema);
const USERS = mongoose.model('User', UserSchema);
const COURSES = mongoose.model('courses', Courses);
module.exports = { ADMIN, USERS, COURSES };