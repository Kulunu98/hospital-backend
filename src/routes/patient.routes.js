import express from 'express';
import {
  getAllPatients,
  getPatientById,
  createPatient,
  updatePatient,
  deletePatient
} from '../controllers/patient.controller.js';
import authenticate from '../middlewares/auth.middleware.js';

const router = express.Router();

router.get('/', authenticate, getAllPatients);
router.get('/:id', authenticate, getPatientById);
router.post('/', authenticate, createPatient);
router.put('/:id', authenticate, updatePatient);
router.delete('/:id', authenticate, deletePatient);

export default router;
