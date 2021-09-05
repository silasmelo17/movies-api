
import { Request, Response } from 'express';

import models from '@Models/index';



async function create( req:Request, res:Response ) {
    const { name, sinopse, year, slug, thumb, type_id } = req.body;
    
    try {
        const midia = await models.Midia.create({
            name, 
            sinopse, 
            slug,
            thumb,
            year, 
            type_id
        });

        return res.status(201).json(midia);
    } catch(err) {
        return res.status(503).json({
            err: "Não foi possível cadastrar."
        });
    }
}



export default create;
