import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface iPayLoad {
    sub: string;
}

export function authenticate(req : Request, res : Response, next : NextFunction) {

    const tokenHash = req.headers.authorization;

    if(!tokenHash) return res.status(401).end();

    const token = tokenHash.split(" ")[1];

    try {
        const { sub } = verify(token, "8123J9KDS9JKfDA9") as iPayLoad;
        req.userID = sub;
    }catch(e) {
        return res.status(401).end();
    }

    return next();

}