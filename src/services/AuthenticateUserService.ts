import { UsersRepository } from "../repositories/UsersRepository";
import { compare } from "bcrypt";
import { reqError } from "../utils/reqError";
import { sign } from "jsonwebtoken";
import { getCustomRepository } from "typeorm";

interface iAuthenticateUserService {

    email: string;
    password: string;

}

export class AuthenticateUserService {

    async execute({ email, password } : iAuthenticateUserService) {

        const usersRepo = getCustomRepository(UsersRepository);

        const user = await usersRepo.findOne({
            email
        });

        if(!user) throw new reqError("Email/Password incorrect", 401);

        const isPasswordCorrect = await compare(password, user.password);

        if(!isPasswordCorrect) throw new reqError("Email/Password incorrect", 401);

        const token = sign({
            name: user.name,
            email: user.email
        }, "8123J9KDS9JKfDA9", {
            subject: user.id,
            expiresIn: "1d"
        });

        return token;
    }

}