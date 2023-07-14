const loginValidate = (req, res, next) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const { email, password } = req.body;

  const validEmail = emailRegex.test(email);
  console.log(validEmail);
  
  if (validEmail === false || !password) {
    return res.status(400).json({
      message: 'Some required fields are missing',
    });
  }
  next();
};

module.exports = loginValidate;