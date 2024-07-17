const { loginService } = require("../services");


const loginController = async (req, res) => {
  try {
    const userLogged = await loginService(req.body);
    
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}


module.exports = {
  loginController,
}