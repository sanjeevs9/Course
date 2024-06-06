import mongoose from "mongoose";

const lessonSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please enter the lesson title"]
    },
    content: {
        type: String,
        required: [true, "Please enter the lesson content"]
    },
    videoUrl: {
        type: String,
        required: true
    },
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export const Lesson = mongoose.model("Lesson", lessonSchema);
