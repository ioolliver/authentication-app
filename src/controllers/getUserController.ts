import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import { getUserService } from "../services/getUserService";

export class getUserController {

    async execute(req : Request, res : Response) {

        const { email } = req.params;

        const getService = new getUserService();

        const user = await getService.execute(email);

        return res.json(instanceToPlain(user));

    }

}