
import { Request, Response } from 'express'

import models from '@Models/index';



async function findAll( req: Request, res: Response ) {
    const { type, page, limit, offset, attributes } = res.locals;

    try {
        const count = models.Midia.count({
            where: {
                type_id: type
            }
        });

        const data = models.Midia.findAll({
            limit, offset, attributes,
            include: {
                model: models.Type,
                where: {
                    id: type
                },
                required: true,
            }
        });

        return res.status(200).json({
            data: await data,
            count: await count,
            limit,
            page,
        });
    } catch(err) {
        return res.status(503).json(err);
    }
}



export default findAll;
