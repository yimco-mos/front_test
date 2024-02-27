import React from "react";
import { REGISTER_URL } from "../../../customs/variables";
import { FormSecion } from "./inputs/FormSecion";
import { InputSecion } from "./inputs/InputSecion";
import { useUser } from "../../../customs/useFetch";
export const CreateUser = () => {
  const { handleChange, formData } = useUser();
  const datas = formData;
    const {handleLogin}=useUser(REGISTER_URL,'POST',datas)





  const RenderAdm = ({data}) => {
   
    return ( 
        <div style={{ width: "100%", maxWidth: "280px", margin: "0 auto",marginTop:'1rem' }}>
              <input type="checkbox" name="admis" value={data} />
        <label style={{color:'#151515e6',margin:'1rem'}}>¿Permisos de Administrador?</label>
              
      </div>
    )

  };

  return (
    <div className="content_inputsec">
      <FormSecion
        title_form={"Crear Usuario"}
        action_btn={"Registrarse"}
        handleClickLogin={handleLogin}
        ChildrenInput={
          <>
            <InputSecion
              label="Nombre"
              type="text"
              placeholder={"Ingresa tu nombre"}
              name="name"
              value={datas.name}
              handleChange={handleChange}
            />
            <InputSecion
              label="Ciudad"
              type="text"
              placeholder={"ingresa una ciudad"}
              name="ciudad"
              value={datas.ciudad}
              handleChange={handleChange}
            />
            <InputSecion
              label="Email"
              type="email"
              placeholder={"Escribe tu email"}
              name="email"
              value={datas.email}
              handleChange={handleChange}
            />
            <InputSecion
              label="Contraseña"
              type="password"
              placeholder={"Escribe tu Contraseña"}
              name="pass"
              value={datas.pass}
              handleChange={handleChange}
            />
          </>
        }
        ciudadesSelect={<RenderAdm data={datas.admis} />}
      />
    </div>
  );
};
