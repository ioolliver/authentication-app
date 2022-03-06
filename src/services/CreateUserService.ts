import { UsersRepository } from "../repositories/UsersRepository";
import { reqError } from "../utils/reqError";
import { hash } from "bcrypt";
import { getCustomRepository } from "typeorm";

interface iCreateUserService {

    name : string;
    email : string;
    password : string;

}

export class CreateUserService {

    async execute({ name, email, password } : iCreateUserService) {

        if(!name) throw new reqError("Name not provided");
        if(!email) throw new reqError("E-mail not provided");
        if(!password) throw new reqError("Password not provided");

        let UsersRepo = getCustomRepository(UsersRepository);

        let emailAlreadyExists = await UsersRepo.findOne({
            email
        });

        if(emailAlreadyExists) throw new reqError("E-mail already registered");

        const passwordHash = await hash(password, 8);

        const user = UsersRepo.create({
            name, email, password: passwordHash
        });

        await UsersRepo.save(user);

        return user;

    }

}