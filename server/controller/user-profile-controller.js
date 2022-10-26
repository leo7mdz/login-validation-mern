import UserModel from "../schemas.js/userSchema.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const profileController = async (req, res) => {
  const { id } = req;

  const exisitingUser = await UserModel.findById(id).exec();

  if (!exisitingUser) {
    res.send("Usuario no autorizado");
  }
  const { name, lastname, age, profession, email } = exisitingUser;
  return res.send({
    name,
    lastname,
    age,
    profession,
    email,
  });
};

export default profileController;
