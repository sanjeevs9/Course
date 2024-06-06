import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import {dbConnection} from './database/databaseConnection.js';
import fileUpload from 'express-fileupload';
import {ErrorMiddleWare} from "./middlewares/error.js"
import userRouter from "./routes/userRouter.js"



const app = express();

dotenv.config({path:"./config/config.env"});

app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods:["GET","POST","PUT","DELETE"],
    credentials:true

}));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api/v1/user",userRouter);

dbConnection();

export default app;