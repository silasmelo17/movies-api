
import express from 'express';
import midiaController from "@Controllers/midiasController";

import { validateMidiaQuery } from "@Middlewares/validateQuery";
import validatePagination from '@Middlewares/validatePagination';
import findByType from '@Middlewares/findByType';



const router = express.Router();

router.get( '/midias/:id', midiaController.findByPk );

router.get( '/series/', findByType(1), validatePagination, validateMidiaQuery, midiaController.findAll );
router.get( '/animes/', findByType(2), validatePagination, validateMidiaQuery, midiaController.findAll );

router.post( '/midias', midiaController.create );



export default router;
