import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please enter the course title"]
    },
    description: {
        type: String,
        required: [true, "Please enter the course description"]
    },
    instructor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    ImageUrl:{
        type:String,
        required:true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    lessons: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Lesson'
    }]
});

export const Course = mongoose.model("Course", courseSchema);
