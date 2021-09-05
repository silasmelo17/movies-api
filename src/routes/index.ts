
import express from 'express';

import categories from '@Routes/categories';
import movies from '@Routes/movies';
import midias from '@Routes/midias';



const router = express.Router();

router.use(categories);
router.use(movies);
router.use(midias);



export default router;
