import { catchAsyncErrors } from '../middlewares/catchAsyncErrors.js'
import {User} from '../models/userSchema.js'
import ErrorHandler from '../middlewares/error.js';
import { sendToken } from '../utils/jwtToken.js';

export const register = catchAsyncErrors(async (req, res, next) => {
    const { name, email, phone, password, role } = req.body;
    console.log(req.body);

    let user = await User.findOne({ email });

    if (user) {
        return next(new ErrorHandler("User Already Exists!",406));
    }

    
    user = await User.create({
        name,
        email,
        phone,
        password,
        role
    });

    sendToken("User Registered Successfully!",user,res,200);
});

export const login = catchAsyncErrors(async (req, res, next) => {
    const { email, password } = req.body;
    if(!email||!password){
        return next(new ErrorHandler("Please Provide email and Password!",400));
    }
    const user = await User.findOne({email}).select("+password");
    
    if(!user){
        return next(new ErrorHandler("Invalid Credentials!",401));
    
    }
    const isPasswordMatched = await user.comparePassword(password);

    if(!isPasswordMatched){
        return next(new ErrorHandler("Invalid Credentials!",401));
    }


    sendToken("User Logged In Successfully!",user,res,200);
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
