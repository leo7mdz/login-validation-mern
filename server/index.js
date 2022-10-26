import app from "./config/express.js";
import connectDB from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

const bootstrap = async () => {
  await connectDB(process.env.MONGO_URL);
  app.listen(process.env.PORT, () => console.log("servidor levantado"));
};

bootstrap();
