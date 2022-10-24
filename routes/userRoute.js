import { Router } from "express";
import registerController from "../controller/user-register-controller.js";

const userRoute = Router();

userRoute.post("/register", registerController);

export default userRoute;
