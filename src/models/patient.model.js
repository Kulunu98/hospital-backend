import mongoose from 'mongoose';

const patientSchema = new mongoose.Schema({
  name: String,
  age: Number,
  gender: String,
  address: String
}, { timestamps: true });

export default mongoose.model('Patient', patientSchema);
