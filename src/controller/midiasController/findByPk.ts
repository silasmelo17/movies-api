
import { Request, Response } from "express";
import models from '@Models/index';



async function findByPk( req: Request, res: Response ) {
    const { id } = req.params;

    try {
        const result = await models.Midia.findOne({
            where: { id },
            attributes: {
                exclude: ['type_id'],
            },
            include: {
                model: models.Type,
            }
        });

        return res.status(200).json(result);
    } catch(err) {
        return res.status(503).json({
            ...err
        });
    }
}



export default findByPk;
