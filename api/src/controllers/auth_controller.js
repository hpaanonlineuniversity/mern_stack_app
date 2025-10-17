import userModel from '../models/user_model.js'
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../configs/config.js'
import { errorHandler } from '../utils/error.js'

// User registration
export async function register(req, res, next) {
    try {
        const { username, email, password } = req.body;

        // Validate required fields
        if (!username || !email || !password) {
            return next(errorHandler(400, "All fields (username, email, password) are required"));
        }

        // Check if user already exists
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return next(errorHandler(400, "User already exists"));
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
        next(errorHandler(500, `Registration failed: ${error.message}`));
    }
}

// User login
export async function login(req, res, next) {
    try {
        const { email, password } = req.body;

        // Validate required fields
        if (!email || !password) {
            return next(errorHandler(400, "Email and password are required"));
        }

        // Find the user by email
        const user = await userModel.findOne({ email });
        if (!user) {
            return next(errorHandler(400, "Invalid email or password"));
        }

        // Compare the password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return next(errorHandler(400, "Invalid email or password"));
        }

        // Create a JWT token
        const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: "1h" });

        const { password: hashedPassword, ...rest } = user._doc;

        res
            .cookie('access_token', token, { httpOnly: true })
            .status(200)
            .json(rest);

    } catch (error) {
        next(errorHandler(500, `Login failed: ${error.message}`));
    }
};

export const github = async (req, res, next) => {
    try {
        const { email, name, photo } = req.body;

        // Validate required fields
        if (!email) {
            return next(errorHandler(400, "Email is required for GitHub authentication"));
        }

        const user = await userModel.findOne({ email });
        if (user) {
            const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: "1h" });
            const { password: hashedPassword, ...rest } = user._doc;

            res
                .cookie('access_token', token, { httpOnly: true })
                .status(200)
                .json(rest);
        } else {
            if (!name) {
                return next(errorHandler(400, "Name is required for new GitHub users"));
            }

            const generatedPassword = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8);
            const newhashedPassword = await bcrypt.hash(generatedPassword, 10);

            const newUser = new userModel({
                username: name.split(' ').join('').toLowerCase() + Math.random().toString(36).slice(-8),
                email: email,
                password: newhashedPassword,
                profilePicture: photo,
            });

            await newUser.save();

            const token = jwt.sign({ userId: newUser._id }, JWT_SECRET, { expiresIn: "1h" });
            const { password: hashedPassword2, ...rest } = newUser._doc;

            res
                .cookie('access_token', token, { httpOnly: true })
                .status(200)
                .json(rest);
        }
    } catch (error) {
        next(errorHandler(500, `GitHub authentication failed: ${error.message}`));
    }
};

export const signout = (req, res, next) => {
    try {
        res.clearCookie('access_token').status(200).json('Signout success!');
    } catch (error) {
        next(errorHandler(500, `Signout failed: ${error.message}`));
    }
};