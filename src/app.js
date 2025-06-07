import express from 'express';
import cors from 'cors';
import patientRoutes from './routes/patient.routes.js';
import medicineRoutes from './routes/medicine.routes.js';
import errorHandler from './middlewares/error.middleware.js';

const app = express();

app.use(cors());

app.use(express.json());

app.use('/api/patientss', patientRoutes);
app.use('/api/medicines', medicineRoutes);

app.use(errorHandler);

export default app;
