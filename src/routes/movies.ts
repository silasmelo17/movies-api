
import express from 'express';

import movieApiController from '@Controllers/moviesController/index';

import { validateMovieQuery } from '@Middlewares/validateQuery';
import validatePagination from '@Middlewares/validatePagination';



const router = express.Router();

router.get( '/movies', validatePagination, validateMovieQuery, movieApiController.findAll );
router.get( '/movies/:slug', movieApiController.findOne );

router.post( '/movies', movieApiController.create );



export default router
