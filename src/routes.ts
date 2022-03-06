import { Request, Response, Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateUserController } from "./controllers/CreateUserController";
import { getUserController } from "./controllers/getUserController";
import { authenticate } from "./middlewares/authenticate";

const routes = Router();

routes.get('/', authenticate, (req : Request, res : Response) => {
    return res.send('You are authenticated!');
});

const createUserControl = new CreateUserController();
routes.post('/users', createUserControl.execute);

const getUserControl = new getUserController();
routes.get('/users/:email', getUserControl.execute);

const authenticateUserControl = new AuthenticateUserController();
routes.post('/token', authenticateUserControl.execute);

export { routes };