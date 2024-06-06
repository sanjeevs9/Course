import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name"],
        minlength: [3, "Name should be at least 3 characters long"],
        maxlength: [30, "Name should not be more than 30 characters long"]
    },
    email: {
        type: String,
        required: [true, "Please enter your email address"],
        unique: [true, "User already registered"],
        validate: [validator.isEmail, "Please enter a valid email address"]
    },
    phone: {
        type: Number,
        required: [true, "Please enter your phone number"]
    },
    password: {
        type: String,
        required: [true, "Please provide your password"],
        minlength: [8, "Password must contain at least 8 characters"],
        maxlength: [32, "Password should not be more than 32 characters long"],
        select: false
    },
    role: {
        type: String,
        enum: ['student', 'admin'],
        default: 'student'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    progress: [{
        courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
        completedLessons: { type: [mongoose.Schema.Types.ObjectId], ref: 'Lesson' },
        quizScores: [{
            quizId: { type: mongoose.Schema.Types.ObjectId, ref: 'Quiz' },
            score: { type: Number }
        }]
    }]
});

// Hash the password before saving the user model
userSchema.pre("save", async function(next) {
    if (!this.isModified("password")) {
        return next();
    }
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

// Compare user password
userSchema.methods.comparePassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
}

// Return JWT token
userSchema.methods.getJWTToken = function() {
    return jwt.sign({ id: this._id, role: this.role }, process.env.JWT_SECRET_KEY, {
        expiresIn: process.env.JWT_EXPIRES
    });
}

export const User = mongoose.model("User", userSchema);
