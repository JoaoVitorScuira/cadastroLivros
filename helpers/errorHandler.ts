import {Response} from "express";

function handleUnknownError(err: any, response: Response){
    console.log(err);
    response.status(500).send(err);
}

export {handleUnknownError};