
import { NextFunction, Request, Response } from 'express';
import { RequestHandler } from 'express-serve-static-core';

import { Model, ModelCtor } from 'sequelize/types';

import models from '@Models/index';

import { validateInclude } from './validate';



const countModel = ( model: ModelCtor<Model<any, any>>): RequestHandler => 
    async (req: Request, res:Response, next: NextFunction) => {
        try{
            const { page, limit } = res.locals;

            const count = await model.count();

            const maxPages = Math.ceil(count/limit);
            const currentPage = page > maxPages ? maxPages: page;

            res.locals = {
                ...res.locals,
                count,
                page: currentPage
            }

            return next();
        } catch(err) {
            return res.status(503).json({
                error: "Não foi possível realizar a contagem.",
                ...err
            })
        }
        
    }


async function findAll( req: Request, res: Response ) {
    const { fields, attributes, page, limit, offset  } = res.locals;

    try {
        const count = await models.Movie.count();

        const maxPages = Math.ceil(count/limit);
        const currentPage = page > maxPages ? maxPages: page;

        const include = validateInclude(fields as [], attributes );

        const data = await models.Movie.findAll({ 
            attributes,
            include,
            limit,
            offset
        });
        
        return res.status(200).json({ 
            data, 
            count, 
            limit, 
            page: currentPage,
        });
    } catch(err) {
        return res.status(503).json({
            error: "Não foi possível retornar os filmes",
            ...err
        });
    }
}

export default findAll;
