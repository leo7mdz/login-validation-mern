import UserModel from "../schemas.js/userSchema.js";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

dotenv.config();

const loginController = async (req, res) => {
  const { email, password } = req.body;

  const existingEmail = await UserModel.findOne({ email }).exec();

  if (!existingEmail) {
    return res.send("Email no registrado");
  }

  const comparePassword = bcrypt.compare(password, existingEmail.password);

  if (!comparePassword) {
    return res.send("password incorrecto");
  }

  const token = jwt.sign({ id: existingEmail._id }, process.env.SECRET_TOKEN);

  return res.send(token);
};

export default loginController;
