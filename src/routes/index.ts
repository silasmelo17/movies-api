
import express from 'express';

import categories from '@Routes/categories';
import movies from '@Routes/movies';



const router = express.Router();

router.use(categories);
router.use(movies);



export default router;
