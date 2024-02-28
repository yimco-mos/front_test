import React, { memo } from "react";
import { Link } from "react-router-dom";

export const ProductList = memo(({ data, error, responseData }) => {
  return (
    <div>
      <div className="content_target">
        {data.map((producto) => (
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
            
            <div style={{display:'flex'}}><Link to={`/productos/details/${producto.id}`}>
              <span
                style={{
                  padding:'.5rem',
                  marginLeft: "auto", 
                  width: "fit-content", 
                  textDecoration: "none", 
                  margin:'10px'
                }}
              >
                Ver detalles
              </span>
            </Link><Link to={`/productos/edit_prod/${producto.id}`}>
              <span
                style={{
                  padding:'.5rem',
                  marginLeft: "auto", 
                  width: "fit-content", 
                  textAlign: "center",
                  textDecoration: "none",
                  margin:'10px'
                }}
              >
                Editar
              </span>
            </Link><Link to={`/productos/delete_prod/${producto.id}`}>
              <span
                style={{
                  padding:'.5rem',

                  marginLeft: "auto", 
                  width: "fit-content", 
                  textAlign: "center",
                  textDecoration: "none",
                  margin:'10px'
                }}
              >
               Eliminar
              </span>
            </Link></div>

          </div>
        ))}
      </div>

      {error && <div>Error: {error.message}</div>}

      {responseData && (
        <div>
          <h2>Acabas de Agregar:</h2>
          <p>Nombre: {responseData.nombre}</p>
          <p>Precio: {responseData.precio}</p>
          <p>Tipo: {responseData.tipo}</p>
        </div>
      )}
    </div>
  );
})
