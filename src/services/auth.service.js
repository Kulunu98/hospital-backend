import User from '../models/auth.model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const login = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) return null;

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return null;

  const token = jwt.sign(
    { id: user._id, email: user.email, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: '1d' }
  );

  return { token };
};

const register = async (userData) => {
  const { email, password, role } = userData;
  const existing = await User.findOne({ email });
  if (existing) throw new Error('Email already exists');

  const user = new User({ email, password, role });
  await user.save();
  return user;
};

export default { login, register };
