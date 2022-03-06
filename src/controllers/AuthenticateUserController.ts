import { Request, Response } from "express";
import { AuthenticateUserService } from "../services/AuthenticateUserService";

export class AuthenticateUserController {

    async execute(req : Request, res : Response) {

        const { email, password } = req.body;

        const authenticateService = new AuthenticateUserService();

        const token = await authenticateService.execute({
            email, password
        });

        return res.json(token);

    }

}