import UserModel from "../schemas.js/userSchema.js";
import { hash } from "bcrypt";
import { SALT } from "../constant/salt.js";

const registerController = async (req, res) => {
  const { name, lastname, age, profession, email, password } = req.body;

  const userEmail = await UserModel.findOne({ email }).exec();
  if (userEmail) {
    return res.send("ya Existe un usuario con ese email");
  }

  const hashPsw = await hash(password, SALT);

  const newUser = new UserModel({
    name,
    lastname,
    age,
    profession,
    email,
  });

  await newUser.save();
  res.send(newUser);
};

export default registerController;
