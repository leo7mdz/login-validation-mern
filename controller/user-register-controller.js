import UserModel from "../schemas.js/userSchema.js";

const registerController = async (req, res) => {
  const { name, lastname, age, profession, email, password } = req.body;

  const userEmail = await UserModel.findOne({ email }).exec();
  if (userEmail) {
    return res.send("ya Existe un usuario con ese email");
  }

  const newUser = new UserModel({
    name,
    lastname,
    age,
    profession,
    email,
    password,
  });

  await newUser.save();
  res.send(newUser);
};

export default registerController;
