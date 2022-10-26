import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const userJwtDTO = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    res.send("Usuario no autorizado");
  }

  const token = authorization.split(" ")[1];

  if (!token) {
    res.send("Credenciales incorrectas");
  }

  const decoded = jwt.verify(token, process.env.SECRET_TOKEN);

  req.id = decoded.id;

  next();
};

export default userJwtDTO;
