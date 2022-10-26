import { Type } from "@sinclair/typebox";
import Ajv from "ajv";
import addFormats from "ajv-formats";
import addErrors from "ajv-errors";
import { typeEmail, typePassword } from "./dtoTypes.js";

const loginDTO = Type.Object({
  email: typeEmail,
  password: typePassword,
});

const ajv = new Ajv({ allErrors: true })
  .addKeyword("kind")
  .addKeyword("modifier");

ajv.addFormat("password", /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/);
addFormats(ajv, ["email"]);
addErrors(ajv);

const validate = ajv.compile(loginDTO);

const validateLogin = (req, res, next) => {
  const isValid = validate(req.body);

  if (!isValid) {
    return res.send(validate.errors.map((error) => error.message));
  }

  next();
};

export default validateLogin;
