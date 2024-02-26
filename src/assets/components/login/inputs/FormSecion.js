import React, { useState } from 'react';
import { InputSecion } from './InputSecion';
import '../../../../styles/login/login.css'
export const FormSecion = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleClickLogin = () => {
    handleLogin(email, pass);
  };


  return (
    <div className='content_secion' >
   <div className='titulo_form'><h2>Login</h2></div>

<div className='fomr_sec'>
<form >
      <InputSecion label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
    <InputSecion label="Password" type="password" value={pass} onChange={(e) => setPass(e.target.value)} />
  

     <div className="pagination">
     <button onClick={handleClickLogin} className="bg-blue-500 text-white px-4 py-2 rounded-md">Login</button>
        </div>
      </form>


</div>

     </div>
  );
};
