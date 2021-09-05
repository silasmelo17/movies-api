
import { Request, Response, NextFunction } from 'express';
import { Query, RequestHandler } from 'express-serve-static-core';

import models from '@Models/index';



const validateFields = (query: Query): string[] => {
    const { fields } = query;

    return fields 
        ? typeof fields === 'string'
            ? fields.split(',')
            : fields instanceof Array
                ? fields.map( value => String(value))
                : []
        : [];
}

const validateAttributes = (fields: string[], allowedAttributes: string[]): string[] => {
    const arr = fields 
        ? fields.filter( field => allowedAttributes.some( attr => attr === field ))
        : [];

    return arr.length > 0 
        ? arr
        : allowedAttributes;
}

const validateQuery = (allowedAttributes: string[]): RequestHandler => 
    async ( req: Request, res: Response, next: NextFunction ) => {

        try {
            const fields = validateFields( req.query );
            const attributes = validateAttributes(fields, allowedAttributes);

            res.locals = {
                ...res.locals,
                fields,
                attributes
            };
        
            return next();
        } catch(err) {
            return res.status(503).json(err);
        }
    }



const moviesAttributes = Object.keys(models.Movie.rawAttributes);
const categoryAttributes = Object.keys(models.Category.rawAttributes);
const midiaAttributes = Object.keys(models.Midia.rawAttributes);

export const validateMovieQuery = validateQuery(moviesAttributes);
export const validateCategoryQuery = validateQuery(categoryAttributes);
export const validateMidiaQuery = validateQuery(midiaAttributes);
