import Patient from '../models/patient.model.js';

const getAll = () => Patient.find();
const getById = (id) => Patient.findById(id);
const create = (data) => Patient.create(data);
const update = (id, data) => Patient.findByIdAndUpdate(id, data, { new: true });
const remove = (id) => Patient.findByIdAndDelete(id);

export default { getAll, getById, create, update, remove };
