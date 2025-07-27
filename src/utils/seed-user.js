import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import User from '../models/auth.model.js';

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

const seedUser = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('✅ Connected to MongoDB');

    const email = 'admin@example.com';
    const password = 'admin123';

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log('ℹ️  User already exists:', email);
      process.exit(0);
    }

    const user = new User({
      email,
      password,
      role: 'admin', // 👈 Set role to admin here
    });

    await user.save();

    console.log('✅ Admin user created:');
    console.log(`   Email: ${email}`);
    console.log(`   Password: ${password}`);
  } catch (err) {
    console.error('❌ Failed to seed user:', err);
  } finally {
    mongoose.disconnect();
  }
};

seedUser();
