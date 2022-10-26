import express from "express";
import userRoute from "../routes/userRoute.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(express.text());
app.use(cors());
app.use("/user", userRoute);

app.get("/", (req, res) => {
  res.send("servidor levantado");
});

export default app;
