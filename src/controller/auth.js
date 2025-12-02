const { authService, userService } = require('../services/index');

exports.login = async (req, res, next) => {
  const payload = req.body;
  const response = await authService.loginService(payload);

  return res.status(200).json({
    status: 200,
    isSuccess: true,
    message: 'login successful',
    data: response,
  });

  //   const data = await userService.getUserDetails(email);
};
