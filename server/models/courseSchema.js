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
    
    category:{
        type:String,
        enum:["Webdevelopement","MobileDevelopment"],
    },
    ImageUrl:{
        type:String,
        required:true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    videoUrl: {
        type: String,
        required: true
    },
    price:{
        type:Number,
        required:true,
        default:0.0
    }
    
});

export const Course = mongoose.model("Course", courseSchema);
