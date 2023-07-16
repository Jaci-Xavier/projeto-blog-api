const emailRegex = (req, res, next) => {
  const { email } = req.body;

  const emailRegexVerify = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validEmail = emailRegexVerify.test(email);

  if (!validEmail) return res.status(400).json({ message: '"email" must be a valid email' });
  next();
};

module.exports = emailRegex;