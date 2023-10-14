const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { authJwt, SECRET } = require("../authenticate/authUsers") 
const { USERS, COURSES } = require("../database/db");
const { hashPassword, comparePasswords } = require("../authenticate/hash");
const e = require("express");

router.post("/signup", async (req, res) => {
    const { username, password } = req.body;

    try {
        const admin = await USERS.findOne({ username });
        if (admin) {
            return res.status(404).json({ message: "Admin already exists" });
        }

        const hashedPassword = hashPassword(req);
        const newAdmin = new USERS({ username, password: hashedPassword });
        await newAdmin.save();
        const token = jwt.sign({ username }, SECRET, { expiresIn: '1h' });
        return res.status(200).json({ message: "Admin Created Successfully", token: token });
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
});

router.post("/login",authJwt, async (req, res) => {
    const { username, password } = req.headers;

    try {
        const admin = await USERS.findOne({ username });
        if (!admin) {
            return res.status(404).json({ message: "Admin not found" });
        }

        const isPasswordMatch = await comparePasswords(req, admin.password);
        if (isPasswordMatch) {
            return res.status(200).json({ message: "Logged In Successfully!" });
        } else {
            return res.status(401).json({ message: "Authentication Failed" });
        }
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
});

router.get('/courses', authJwt, async(req, res)=>{
    const courses = await COURSES.find({published: true});
    res.json({ courses });
});

router.post('/courses/:courseId', authJwt , async (req, res)=>{
    const course = await COURSES.findById(req.params.courseId);
    if(course){
        const user = await USERS.findOne({ username: req.user.username});
        if(user){
            user.purchasedCourses.push(course);
            await user.save();
            res.status(200).json({ message: "Course purchased successfully!" });
        }
        else{
            res.status(404).json({message:"User not exist!"});
        }
    }
    else{
        res.status(404).json({message: "Courses not found!"});
    }
});

router.get('/purchasedCourse',authJwt, async(req,res)=>{
    const user = await USERS.findOne({username: req.user.username});
    if(user){
        res.status(200).json({ purchasedCourses: user.purchasedCourses || []})
    }
    else{
        res.status(404).json({message: "No User found! "})
    }
});

module.exports = router;
