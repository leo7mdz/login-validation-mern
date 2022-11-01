import { Type } from "@sinclair/typebox";
import Ajv from "ajv";
import addFormats from "ajv-formats";
import addErrors from "ajv-errors";
import {
  typeAge,
  typeEmail,
  typeLastName,
  typeName,
  typePassword,
  typeProfession,
} from "./dtoTypes.js";

const registerDTO = Type.Object({
  name: typeName,
  lastname: typeLastName,
  age: typeAge,
  profession: typeProfession,
  email: typeEmail,
  password: typePassword,
});

const ajv = new Ajv({ allErrors: true })
  .addKeyword("kind")
  .addKeyword("modifier");

ajv.addFormat("password", /[A-Za-z0-9!?-]{10,25}/);
addFormats(ajv, ["email"]);
addErrors(ajv);

const validate = ajv.compile(registerDTO);

const validateRegister = (req, res, next) => {
  const isValid = validate(req.body);

  if (!isValid) {
    return res.status(400).send({
      errors: validate.errors.map((error) => error.message),
    });
  }
  next();
};

export default validateRegister;
