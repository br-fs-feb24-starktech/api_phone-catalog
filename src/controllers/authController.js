const { loginService, registerService } = require('../services');

const loginController = async (req, res) => {
  try {
    const userLogged = await loginService(req.body);

    return res.status(200).json(userLogged);
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

const registerController = async (req, res) => {
  try {

    const registeredUser = await registerService(req.body);

    return res.status(201).json(registeredUser);
    
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = {
  loginController,
  registerController,
};
