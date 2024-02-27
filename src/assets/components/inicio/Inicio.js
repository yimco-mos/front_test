import React from "react";
import "../../../styles/componentget/inicio.css";
import { AsideInicio } from "./AsideInicio";
import { Link } from "react-router-dom";
import { useUser } from "../../../customs/useFetch";
export const Inicio = () => {


  const {dataUser}=useUser()


const dtfetch =async ()=>{

  const useres = dataUser
  return useres
  }

     


  const act = sessionStorage.getItem('act')
  return (
    <div className="container_inicio">
         <div className="titulo_principal">
        <h2> Bienvenido {} Esto Es Una</h2>

        <h1>Aplicacion para tiendas y productos</h1>
      </div>
    {console.log(dtfetch())}

    {
      !act && <>  <div className="contenido_inicio">
   

      <div className="descripcion_inicio">
        <p>
          Esta es la plataforma administrativa de tiendas y productos.
          <br />
          Para obtener más información<br/> por favor 
          <span className="opcion_initbtn">
            <Link to={"/login"}> iniciar secion </Link>
          </span>
          o
          <span className="opcion_initbtn">
            <Link to={"/registrarse"}> registrarse</Link>
          </span>
      
        </p>
      </div>
    </div></>
    }

      <AsideInicio />
    </div>
  );
};

