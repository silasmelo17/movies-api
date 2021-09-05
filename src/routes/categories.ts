
import express from 'express';

import categoriesControllerAPI from '@Controllers/categoriesController/index';

import { validateCategoryQuery, validateMovieQuery } from '@Middlewares/validateQuery';
import validatePagination from '@Middlewares/validatePagination';




const router = express.Router();

router.get( '/categories', validatePagination, validateCategoryQuery, categoriesControllerAPI.findAll );
router.get( '/category/:id', validatePagination, validateMovieQuery, categoriesControllerAPI.findByCategory );



export default router;
