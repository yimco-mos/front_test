import React from 'react';
import { LOGIN_URL } from '../../../customs/variables';
import { useLogin } from '../../../customs/useFetch';
import { FormSecion } from './inputs/FormSecion';

export const Login = () =>{
const { loading, error, login,  } = useLogin(LOGIN_URL);

const handleLogin = async (email, pass) => {
  await login(email, pass);
};

return (
  <>
    <FormSecion handleLogin={handleLogin} />
  </>
);

};
