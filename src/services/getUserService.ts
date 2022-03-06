import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";
import { instanceToPlain } from "class-transformer";
import { reqError } from "../utils/reqError";

export class getUserService {

    async execute(email : string) {

        const usersRepo = getCustomRepository(UsersRepository);

        const user = await usersRepo.findOne({
            email
        });

        if(!user) throw new reqError("Email not registered");

        return user;

    }

}