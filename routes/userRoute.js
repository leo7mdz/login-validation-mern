import { Router } from "express";
import loginController from "../controller/user-login-controller.js";
import profileController from "../controller/user-profile-controller.js";
import registerController from "../controller/user-register-controller.js";

const userRoute = Router();

userRoute.post("/register", registerController);
userRoute.post("/login", loginController);
userRoute.get("/profile", profileController);

export default userRoute;
