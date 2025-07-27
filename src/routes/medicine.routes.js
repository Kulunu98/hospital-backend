import express from 'express';
import {
  getAllMedicines,
  getMedicineById,
  createMedicine,
  updateMedicine,
  deleteMedicine
} from '../controllers/medicine.controller.js';
import authenticate from '../middlewares/auth.middleware.js';

const router = express.Router();

router.get('/', authenticate, getAllMedicines);
router.get('/:id', authenticate, getMedicineById);
router.post('/', authenticate, createMedicine);
router.put('/:id', authenticate, updateMedicine);
router.delete('/:id', authenticate, deleteMedicine);

export default router;
