
import { Request, Response } from 'express';
import models from '@Models/index';



async function findAll (req: Request, res: Response ) {
    const { attributes } = res.locals;

    try {
        const result = await models.Category.findAll({
            attributes
        });

        return res.status(200).json(result);
    }catch(err) {
        return res.status(503).json(err);
    }
}



export default findAll;
