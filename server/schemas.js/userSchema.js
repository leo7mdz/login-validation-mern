import { model, Schema } from "mongoose";

const userSchema = new Schema({
  name: String,
  lastname: String,
  age: String,
  profession: String,
  email: String,
  password: String,
});

const UserModel = model("Usuarios", userSchema);

export default UserModel;
