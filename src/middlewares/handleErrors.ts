import { NextFunction, Request, Response } from "express";
import { reqError } from "../utils/reqError";

export function handleErrors(err : reqError, req : Request, res : Response, next : NextFunction) {

    if(err instanceof reqError) 
        return res.status(err.code).json({
            message: err.message
        });
    
    return res.status(500).json({
        message: "Internal Server Error"
    });

}