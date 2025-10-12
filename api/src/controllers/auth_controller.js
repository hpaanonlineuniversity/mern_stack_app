import userModel from '../models/user_model.js'
import bcrypt from 'bcryptjs';

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
