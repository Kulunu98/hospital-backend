import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

import patientRoutes from './routes/patient.routes.js';
import medicineRoutes from './routes/medicine.routes.js';
import authRoutes from './routes/auth.routes.js';
import errorHandler from './middlewares/error.middleware.js';

const app = express();

// Get __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static HTML status page at /api
app.get('/api', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'status.html')); // 👈 matches src/public/status.html
});

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/patients', patientRoutes);
app.use('/api/medicines', medicineRoutes);

app.use(errorHandler);

export default app;

