const loginService = require('../services/login.service');

const login = async (req, res) => {
  const { email, password } = req.body;

  const token = await loginService.login(email, password);

  if (token.message) return res.status(400).json({ message: token.message });

  res.status(200).json({ token });
};

module.exports = { login };