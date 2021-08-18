
require('dotenv').config();

import express from 'express';

const app = express();

// Controllers
import routes from '@Routes/index';

// Express Config
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use(routes);

//Listen Server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`App listening on port: ${PORT}`);
});
