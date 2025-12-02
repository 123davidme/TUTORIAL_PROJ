const userData = {
  email: 'samuel@gmail.com',
  password: 'goodluck',
};

exports.loginService = async (data) => {
  const { email, password } = data;

  if (email !== userData.email || password !== userData.password)
    return 'invalid credentials';

  return userData;
};
