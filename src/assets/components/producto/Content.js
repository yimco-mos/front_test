import React from "react";
import { Routes, Route } from "react-router-dom";
import "../../../styles/componentget/componentget.css";
import "../../../styles/header/miniheader.css";
import { ProductoComponent } from "./ProductoComponent";
import { MiniHeader } from "../Header/components/Menuscreen";
export const Content = () => {
  return (
    <div className="content_serv">
      <>
        <MiniHeader
          name2="Agregar Producto"
          route2={"/productos/add_productos"}
          name1="Ver Productos"
          route1="/productos"
        />
      </>

      <ProductoComponent />
    </div>
  );
};
