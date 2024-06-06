import { catchAsyncErrors } from '../middlewares/catchAsyncErrors.js'
import User from '../models/userSchema.js'

export const register = catchAsyncErrors(async (req, res, next) => {
    const { name, email, phone, password, role } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
        return res.status(400).json({ message: 'User already exists' });
    }

    const user = new User({
        name,
        email,
        phone,
        password,
        role
    });

    await user.save();

    res.status(201).json({ message: 'User registered successfully' });
});

export const login = catchAsyncErrors(async (req, res, next) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user || !(await user.matchPassword(password))) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Create session or token here

    res.status(200).json({ message: 'Logged in successfully' });
});

export const logout = catchAsyncErrors(async (req, res, next) => {
    // Destroy session or invalidate token here

    res.status(200).cookie("token","",{
        expires: new Date(Date.now()),
        httpOnly:true //cookie cannot be accessed or modified by the browser
    }).json({
        success:true,
        message:"Logged Out Successfully!",
    });
});
