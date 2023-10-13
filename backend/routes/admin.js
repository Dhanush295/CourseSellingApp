const express = require("express");
const router = express.Router();
const { z } = require("zod");
const { ADMIN } = require("../database/db");
const { hashPassword, comparePasswords } = require("../authenticate/auth");

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

module.exports = router;
