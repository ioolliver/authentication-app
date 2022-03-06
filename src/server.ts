import "./database";
import "express-async-errors";

import express from "express";
import { routes } from "./routes";
import { handleErrors } from "./middlewares/handleErrors";

const App = express();

App.use(express.json());
App.use(routes);
App.use(handleErrors);

App.listen(3030, () => console.log('Listening on localhost:3030'));