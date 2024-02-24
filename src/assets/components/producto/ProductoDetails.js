import React from "react";
import { Link } from "react-router-dom";
import { Loading } from "../Loading";

export const ProductDetails = ({ producto, error }) => {
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!producto) {
    return <Loading />
  }

  return (
    <div>
      <div className="content_target">
        <div key={producto.id} className="target_body flex">
          <span className="tit_target">
            <p>Producto:</p>
            <h3>{producto.nombre}</h3>
          </span>
          <p>
            <img
              src="https://img.icons8.com/fluency/18/price-tag-usd.png"
              alt="img"
            />{" "}
            {producto.precio}
          </p>
          <p>Tipo: {producto.tipo}</p>
            
          <div style={{display:'flex'}}>
            <Link to={`/productos/edit_prod/${producto.id}`}>
              <span
                style={{
                  marginLeft: "auto", 
                  width: "fit-content", 
                  textAlign: "center",
                  textDecoration: "none",
                }}
              >
                Editar
              </span>
            </Link>
            <Link to={`/productos/delete_prod/${producto.id}`}>
              <span
                style={{
                  marginLeft: "auto", 
                  width: "fit-content", 
                  textAlign: "center",
                  textDecoration: "none",
                }}
              >
                Eliminar
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
