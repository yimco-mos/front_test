import React from "react";
import { usePostProducto } from "../../../customs/useFetch";
import { InputForm } from "../InputForm";
import { PRODUCTO_URL } from "../../../customs/variables";
import { MiniHeader } from "../Header/components/Menuscreen";

export const FormsProducto = () => {
  const {
    postData,
    error,
    handleChange,
    formData,
    responseData,
    showResponse,
    resetResponse,
  } = usePostProducto(PRODUCTO_URL);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await postData();
  };

  const labels = {
    nombre: "Nombre del Producto",
    precio: "Precio",
  };

  const fields = [
    { name: "nombre", type: "text", placeholder: "Nombre" },
    { name: "precio", type: "text", placeholder: "Precio" },
  ];

  return (
    <>
      <MiniHeader
        name2="Agregar Producto"
        route2={"/productos/add_productos"}
        name1="Ver Productos"
        route1="/productos"
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
          <label htmlFor="tipo">Tipo:</label>
          <select
            style={{ color: "#777", padding: ".5rem", margin: ".5rem" }}
            id="tipo"
            name="tipo"
            value={formData.tipo}
            onChange={handleChange}
          >
            <option value="perecedero">Perecedero</option>
            <option value="no perecedero">No perecedero</option>
          </select>
        </div>

        <div className="content_enviar">
          <button className="enviar" type="submit">
            Enviar
          </button>
        </div>

        {error && alert('Tipo de producto no permitido')}

        {showResponse && (
          <div className="content_target">
            <div className="target_body flex">
              <span className="tit_target">
                <p>Producto:</p>
                <h3>{responseData?.nombre}</h3>
              </span>
              <p>
                <img
                  src="https://img.icons8.com/fluency/18/price-tag-usd.png"
                  alt="img"
                />{" "}
                {responseData?.precio}
              </p>
              <p>Tipo: {responseData?.tipo}</p>
            </div>
          </div>
        )}
        </div>

      </form>
    </>
  );
};
