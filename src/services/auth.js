const userData = {
  email: 'samuel@gmail.com',
  password: 'goodluck',
};

exports.loginService = async (data) => {
  const { email, password } = data;

  if (email !== userData.email || password !== userData.password)
    throw new Error('invalid credentials');

  return userData;
};
