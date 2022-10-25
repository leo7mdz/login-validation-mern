import UserModel from "../schemas.js/userSchema.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const profileController = async (req, res) => {
  const { id } = req;

  const decoded = jwt.verify(id, process.env.SECRET_TOKEN);
  console.log(decoded);

  const exisitingUser = await UserModel.findById(decoded.id).exec();

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
