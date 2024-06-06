import express from "express";
import {login,logout,register} from "../controller/userController.js"

const router = express.Router();

import {isAuthenticated} from "../middlewares/auth.js"

router.post("/login",login);

router.get("/logout",isAuthenticated,logout);

router.post("/register",register);


export default router;