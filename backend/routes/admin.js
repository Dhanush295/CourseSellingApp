const express = require("express");
const router = express.Router();
const { z } = require("zod");
const { ADMIN } = require("../database/db");
const { hashPassword, comparePasswords } = require("../authenticate/auth");


const LoginSchema = z.object({
  // In this example we will only validate the request body.
  body: z.object({
    // email should be valid and non-empty
    username: z.string().min(5),
    // password should be atleast 6 characters
    password: z.string().min(6),
  }),
});

const validate = (schema) => (req, res, next) => {
  try {
    schema.parse({
      body: req.body,
    });

    next();
  } catch (err) {
    return res.status(400).send(err.errors);
  }
};



router.post("/signup",validate(LoginSchema), async (req, res) => {
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

router.post("/login",validate(LoginSchema) ,async (req, res) => {
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
