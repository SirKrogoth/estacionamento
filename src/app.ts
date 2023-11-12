import express, { Router } from 'express';
import helmet from 'helmet';
import vehicleRouter from './routes/vehicleRouter';
const app = express();

app.use(helmet());
app.use(express.json());
app.use(vehicleRouter);

export default app;