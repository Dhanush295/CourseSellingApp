const express = require("express");
const router = express.Router();
const { ADMIN, COURSES } = require("../database/db");
const { hashPassword, comparePasswords } = require("../authenticate/hash");

router.post("/signup", async (req, res) => {
    const { username, password } = req.body;

    try {
        const admin = await ADMIN.findOne({ username });
        if (admin) {
            return res.status(404).json({ message: "Admin already exists" });
        }

        const hashedPassword = hashPassword(req);
        const newAdmin = new ADMIN({ username, password: hashedPassword });
        await newAdmin.save();
        return res.status(200).json({ message: "Admin Created Successfully" });
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
});

router.post("/login",async (req, res) => {
    const { username, password } = req.headers;

    try {
        const admin = await ADMIN.findOne({ username });
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

router.post('/createcourses', async(req,res)=>{
    const addCourses = req.body;
    const course = await COURSES.findOne({title : addCourses.title})
    if(!course){
        const courseData = new COURSES(addCourses);
        courseData.save();
        res.status(200).json({message: "Course Created Successfully! "});
    }else{
        res.status(400).json({message: "Course not Found! "});
    }
});

router.put('/courses/:courseId', async(req,res)=>{
    const updateCourse = await COURSES.findByIdAndUpdate(req.params.courseId, req.body, { new: true });
    if(updateCourse){
        res.status(200).json({message: "Course updated successfully!"});
    }
    else{
        res.status(400).json({message: "Course not exist!"});
    }
});

router.get("/courses/:courseId", async(req,res)=>{
    const id = req.params.courseId;
    const course = await COURSES.findById(id);
    if(course){
        res.json({course});
    }else{
        res.status(404).json({message: "Course not found"});
    }
});

router.get('/courses', async(req,res)=>{
    const courses = await COURSES.find({});
    res.json({ courses });
});

module.exports = router;
