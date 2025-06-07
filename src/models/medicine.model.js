import mongoose from 'mongoose';

const medicineSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number
}, { timestamps: true });

export default mongoose.model('Medicine', medicineSchema);
