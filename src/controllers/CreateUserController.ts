import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";
import { instanceToPlain } from "class-transformer";

export class CreateUserController {

    async execute(req : Request, res : Response) {

        const { name, email, password } = req.body;

        const createService = new CreateUserService();

        const user = await createService.execute({
            name, email, password
        });

        res.json(instanceToPlain(user));

    } 

}