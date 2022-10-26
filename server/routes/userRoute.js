import { Router } from "express";
import loginController from "../controller/user-login-controller.js";
import profileController from "../controller/user-profile-controller.js";
import registerController from "../controller/user-register-controller.js";
import userJwtDTO from "../dto/jwt-dto.js";
import validateLogin from "../dto/login-dto.js";
import validateRegister from "../dto/register-dto.js";

const userRoute = Router();

userRoute.post("/register", validateRegister, registerController);
userRoute.post("/login", validateLogin, loginController);
userRoute.get("/profile", userJwtDTO, profileController);

export default userRoute;
