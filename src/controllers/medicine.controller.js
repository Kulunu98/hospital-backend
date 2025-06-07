import medicineService from '../services/medicine.service.js';

export const getAllMedicines = async (req, res, next) => {
  try {
    const medicines = await medicineService.getAll();
    res.json(medicines);
  } catch (err) {
    next(err);
  }
};

export const getMedicineById = async (req, res, next) => {
  try {
    const medicine = await medicineService.getById(req.params.id);
    if (!medicine) return res.status(404).json({ message: 'Medicine not found' });
    res.json(medicine);
  } catch (err) {
    next(err);
  }
};

export const createMedicine = async (req, res, next) => {
  try {
    const medicine = await medicineService.create(req.body);
    res.status(201).json(medicine);
  } catch (err) {
    next(err);
  }
};

export const updateMedicine = async (req, res, next) => {
  try {
    const medicine = await medicineService.update(req.params.id, req.body);
    if (!medicine) return res.status(404).json({ message: 'Medicine not found' });
    res.json(medicine);
  } catch (err) {
    next(err);
  }
};

export const deleteMedicine = async (req, res, next) => {
  try {
    const deleted = await medicineService.remove(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Medicine not found' });
    res.json({ message: 'Medicine deleted' });
  } catch (err) {
    next(err);
  }
};
