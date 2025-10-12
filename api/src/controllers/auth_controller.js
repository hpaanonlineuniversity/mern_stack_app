import userModel from '../models/user_model.js'
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../configs/config.js'
import { errorHandler } from '../utils/error.js'

// User registration
export async function register(req, res,next) {
    try {
        const { username, email, password } = req.body;

        // Check if user already exists
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = new userModel({
            username,
            email,
            password: hashedPassword,
        });

        await newUser.save();
        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        //console.error("Registration error:",error.message)
        //res.status(500).json({ message: "Error registering user", error: error.message });
        next(error);
    }
}

// User login
export async function login(req, res,next) {
    try {
        const { email, password } = req.body;

        // Find the user by email
        const user = await userModel.findOne({ email });
        
        /*
        if (!user) {
            return res.status(400).json({ message: "Invalid email or password" });
        }*/
        if (!user) return next(errorHandler(400,"Invalid email or password"));



        // Compare the password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid email or password" });
        }


        // Create a JWT token
         const token = jwt.sign({ userId: user._id },JWT_SECRET,{expiresIn: "1h"});

         const {password: hashedPassword, ...rest} = user._doc;

        //res.status(200).json({ token });
        res
            .cookie('access_token', token, {httpOnly: true })
            .status(200)
            .json(rest);

    } catch (error) {
        next(error);
    }
};