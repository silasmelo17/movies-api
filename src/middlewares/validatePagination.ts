
import { Request, Response, NextFunction } from 'express';



async function validatePagination( req: Request, res: Response, next: NextFunction ){
    const { query } = req;

    try {
        const limit = Number(query.limit) || 12;
        const page = Number(query.page) || 1;

        const limitPossibilities = [ 12, 24, 36 ];
        const correctLimit = limitPossibilities.find( possibility => possibility === limit ) || 12;

        res.locals = {
            ...res.locals,
            limit: correctLimit, 
            offset: correctLimit * (page-1),
            page
        };
    
        return next();
    } catch(err) {
        return res.status(503).json(err);
    }
}



export default validatePagination;
