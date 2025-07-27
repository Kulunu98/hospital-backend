import authService from '../services/auth.service.js';

export const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const result = await authService.login(email, password);

    if (!result) return res.status(401).json({ message: 'Invalid credentials' });
    res.json(result);
  } catch (err) {
    next(err);
  }
};

export const registerUser = async (req, res, next) => {
  try {
    const user = await authService.register(req.body);
    res.status(201).json({ message: 'User registered', user: { email: user.email, role: user.role } });
  } catch (err) {
    next(err);
  }
};
