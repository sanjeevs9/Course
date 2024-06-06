import { Course } from "../models/courseSchema";

const upload = async (req, res) => {
  try {
    const { title, description, instructor, price, videoUrl } = req.body;
    const base64 = Buffer.from(req.file.buffer).toString("base64");
    const course = await Course.create({
      title,
      description,
      instructor,
      ImageUrl: base64,
      price,
      videoUrl,
    });
    res.json({
      status: true,
      post: course._id,
    });
  } catch (error) {
    console.log("post controller 17 line \n" + error);
    res.status(404).json({
      status: false,
    });
  }
};



module.exports = {upload}