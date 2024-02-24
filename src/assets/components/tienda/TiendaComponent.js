import React from "react";
import "../../../styles/componentget/componentget.css";
import { TIENDA_URL } from "../../../customs/variables";
import { useFetchGet } from "../../../customs/useFetch";
import { Loading } from "../Loading";
import { usePagination } from "../../../customs/usePaginacion";
import { MiniHeader } from "../Header/components/Menuscreen";
import { Link } from "react-router-dom";
export const TiendaComponent = () => {
  const { data, loading, error } = useFetchGet(TIENDA_URL);
  const { start, nextPage, previousPage } = usePagination();

  const itemsPerLoad = 3;

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const limitedData = data.slice(start, start + itemsPerLoad);
  const isFirstPage = start === 0;
  const isLastPage = start + itemsPerLoad >= data.length;

  return (
    <>
      <MiniHeader
        name1={"Agregar Tienda"}
        route1="/tiendas/add_tiendas"
        name2={"Ver Las Tienda"}
        route2="/tiendas"
      />
      <div className="content_data">
        <div className="content_target">
          {limitedData.map((tienda) => (
            <div key={tienda.id} className="target_body">
              <h3 style={{fontSize:'1rem'}}>{tienda.nombre}</h3>
              <p><img src="https://img.icons8.com/fluency/18/shop.png" alt="shop"/> Dirección: {tienda.direccion}</p>
              <p><img alt="img" src="https://img.icons8.com/3d-fluency/14/location.png" /> Ciudad: {tienda.ciudad}</p>
              <div style={{display:'flex'}}><Link to={`/tiendas/details/${tienda.id}`}>
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
            </Link><Link to={`/tiendas/edit_tienda/${tienda.id}`}>
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
            </Link><Link to={`/tiendas/delete_tienda/${tienda.id}`}>
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
        <div className="pagination">
          {!isFirstPage && <button onClick={previousPage}>Anterior</button>}
          {!isLastPage && <button onClick={nextPage}>Siguiente</button>}
        </div>
      </div>
    </>
  );
};
