import express, { json } from 'express';
import TiposController from './feature/tipos/api/v1/tipos-controller.mjs';

const app = express();


app.use(express.json());


const tiposApiController = new TiposController();
app.use('/api/', tiposApiController.getRouter());


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});