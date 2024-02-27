import React from 'react';
import { LOGIN_URL } from '../../../customs/variables';
import { FormSecion } from './inputs/FormSecion';
import { InputSecion } from './inputs/InputSecion';
import { useUser } from '../../../customs/useFetch';
export const Login = () => {
  const {  handleChange, formData  } = useUser();
   const {email,pass }=formData;
    const data = {email,pass}
  const {handleLogin}=useUser(LOGIN_URL,'POST',data)

 
    
    




  return (
    <div className="content_inputsec">
      <FormSecion
        action_btn={'Login'}
        title_form={'Login'}
        handleClickLogin={handleLogin}
        ChildrenInput={
          <>
            <InputSecion
              label="Email"
              type="email"
              placeholder="Escribe tu email"
              name="email"
              value={formData.email}
              handleChange={(e) => handleChange(e, formData)}
            />
            <InputSecion
              label="Password"
              type="password"
              placeholder="Escribe tu Contraseña"
              name="pass"
              value={formData.pass}
              handleChange={(e) => handleChange(e, formData)}
            />
          </>
        }
      
      />
    </div>
  );
};
