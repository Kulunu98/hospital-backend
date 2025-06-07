import Medicine from '../models/medicine.model.js';

const getAll = () => Medicine.find();
const getById = (id) => Medicine.findById(id);
const create = (data) => Medicine.create(data);
const update = (id, data) => Medicine.findByIdAndUpdate(id, data, { new: true });
const remove = (id) => Medicine.findByIdAndDelete(id);

export default { getAll, getById, create, update, remove };
