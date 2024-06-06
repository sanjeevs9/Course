import { catchAsyncErrors } from '../middlewares/catchAsyncErrors.js';
import ErrorHandler from '../middlewares/error.js';

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

export const CourseSetup =catchAsyncErrors(async(req,res,next)=>{
    
  if(!req.files || Object.keys(req.files).length === 0){
      return next(new ErrorHandler("User Data and Video is Required!",400));

  }
  const {video} = req.files;
  const allowedFormats = [
      "video/mp4",
      "video/mpeg",
      "video/ogg",
      "video/quicktime",
      "video/webm",
      "video/x-ms-wmv",
      "video/x-flv",
      "video/3gpp",
      "video/3gpp2",
      "video/x-msvideo"
  ];

  if(!allowedFormats.includes(video.mimetype)){
      return next(new ErrorHandler("Invalid video Format!",400));
  }

  const {title,description,category,price} = req.body;

  if(!name||!email||!phone||!password){
      return next(new ErrorHandler("All Fields are Required!",400));
  }

  let user = await User.findOne({email});

  if(user){
      return next(new ErrorHandler("User Already Exists!",400));
  }

  const cloudinaryResponse = await cloudinary.uploader.upload(avatar.tempFilePath);

  if(!cloudinaryResponse || cloudinary.error){
      console.log("CloudinaryError:",cloudinaryResponse.error || "Unknown Cloudinary Error")
  }


  user = await User.create({
      name,
      email,
      phone,
      password,
      avatar:{
          public_id:cloudinaryResponse.public_id,
          url:cloudinaryResponse.secure_url
      }
  
  });

  sendToken("User Registered Successfully!",user,res,200);


  // res.status(200).json({
  //     success:true,
  //     message:"User Registered Successfully!",
  // })

});






module.exports = {upload}







