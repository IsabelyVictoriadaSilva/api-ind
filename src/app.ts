
import express from "express";
import routes from "./routes/index.js";
import { errorHandler } from "./middlewares/error-handler.js";

export const app = express();

app.use(express.json());
app.use(routes);
app.use(errorHandler); // sempre por último
