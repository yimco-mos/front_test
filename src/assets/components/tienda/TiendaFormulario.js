import React from "react";
import { InputForm } from "../InputForm";
import { TIENDA_URL } from "../../../customs/variables";
import { MiniHeader } from "../Header/components/Menuscreen";
import { usePostTienda } from "../../../customs/useFetch";

export const TiendaFormulario = () => {
  const { postData, error, handleChange, formData, responseData, showResponse } =
    usePostTienda(TIENDA_URL);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await postData();
  };

  const labels = {
    nombre: "Nombre de la Tienda",
    direccion: "Dirección",
    ciudad: "Ciudad",
  };

  const fields = [
    { name: "nombre", type: "text", placeholder: labels.nombre },
    { name: "direccion", type: "text", placeholder: labels.direccion },
  ];

  return (
    <>
      <MiniHeader
        name1={"Agregar Tienda"}
        route1="/tiendas/add_tiendas"
        name2={"Ver Las Tienda"}
        route2="/tiendas"
      />
      <form onSubmit={handleSubmit}>


          <div className="tienda_prods">
          <InputForm
          labels={labels}
          formData={formData}
          handleChange={handleChange}
          fields={fields}
        />

        <div style={{ width: "100%", maxWidth: "280px", margin: "0 auto" }}>
          <label htmlFor="ciudad">Ciudad:</label>
          <select
            style={{ color: "#151515e6", padding: ".5rem", margin: ".5rem" }}
            id="ciudad"
            name="ciudad"
            
            value={formData.ciudad}
            onChange={handleChange}
          >
            <option value="SMR">selecciona una ciudad</option>
            <option value="SMR">Santa Marta</option>
            <option value="BOG">Bogotá</option>
            <option value="MED">Medellín</option>
          </select>
        </div>

        <div className="content_enviar">
          <button className="enviar" type="submit">
            Enviar
          </button>
        </div>

        {error && alert('Datos de la tienda no valida')}

        {showResponse && responseData && (
          <div className="content_target">
            <div className="target_body flex">
              <span className="tit_target">
                <p>Tienda:</p>
                <h3>{responseData.nombre}</h3>
              </span>
              <p>Dirección: {responseData.direccion}</p>
              <p>Ciudad: {responseData.ciudad}</p>
            </div>
          </div>
        )}
          </div>


      </form>
    </>
  );
};
