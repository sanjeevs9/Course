import mongoose from "mongoose";

const lessonSchema = new mongoose.Schema({
    
    courseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
        required: true
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required: true
    },
    status:{
        type:String,
        enum:["Not Started","In Progress","Completed"],
        default:"Not Started"
    },
    
});

export const Status = mongoose.model("Status", statusSchema);