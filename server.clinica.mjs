import 'dotenv/config';

import express, { json } from 'express';
import TiposController from './feature/tipos/api/v1/tipos-controller.mjs';

const app = express();

// Middleware para devolver responses como JSON
app.use(json());

// Routes
const tiposApiController = new TiposController();
app.use('/api/', tiposApiController.getRouter());

// Start the server
const PORT = process.env.PORT || 3000;

console.log(process.env.MYSQL_DATABASE_URL);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});