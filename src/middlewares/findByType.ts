
import { Request, Response, NextFunction } from "express";



const findByType = (type: number) => 
    (req: Request, res: Response, next: NextFunction) => {
        res.locals = {
            type
        }

        next();
    }



export default findByType;
