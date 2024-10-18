import express from "express";
import morgan from "morgan";
import { characterRouter } from "./characterRouter";

const application = express();

application.use(morgan("tiny"));
application.use("/character", characterRouter);
application.listen(3000, () => console.log("Server is runnig"));
