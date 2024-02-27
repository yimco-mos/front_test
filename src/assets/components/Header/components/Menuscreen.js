import React from "react";
import { ListHeader } from "./ListComponent";
import "../../../../styles/header/menus.css";
//
export const Menuscreen = () => {
  const active = sessionStorage.getItem("act");

  return (
    <ul>
          <ListHeader nav_name="Inicio" nav_route="/" />

      {!active && (
        <>
          <ListHeader nav_name="Login" nav_route="/login" />
          <ListHeader nav_name="Registrarse" nav_route="/registrarse" />
        </>
      )}
      {active && (
        <>
          {" "}
          <ListHeader nav_name="Productos" nav_route="/productos" />
          <ListHeader nav_name="Tiendas" nav_route="/tiendas" />
          <ListHeader nav_name="Asociacion" nav_route="/relacionar" />
        </>
      )}
    </ul>
  );
};

export const MenuMovil = ({ menuOpen, menuToggle }) => {
  const act = sessionStorage.getItem("act");

  return (
    <div className="content_navs_menu">
      {menuOpen && (
        <nav className="navs_movil text-neutral-950 block">
          <ul>
          <ListHeader
                  togglemenu={menuToggle}
                  nav_name="Inicio"
                  nav_route="/"
                />
            {!act && (
              <>
          
                <ListHeader
                  togglemenu={menuToggle}
                  nav_name="Login"
                  nav_route="/login"
                />
                <ListHeader
                  togglemenu={menuToggle}
                  nav_name="Registrase"
                  nav_route="/registrarse"
                />
              </>
            )}
            {act && (
              <>
                <ListHeader
                  togglemenu={menuToggle}
                  nav_name="productos"
                  nav_route="/productos"
                />
                <ListHeader
                  togglemenu={menuToggle}
                  nav_name="tiendas"
                  nav_route="/tiendas"
                />
                <ListHeader
                  togglemenu={menuToggle}
                  nav_name="asociacion"
                  nav_route="/relacionar"
                />
              </>
            )}
          </ul>
        </nav>
      )}
    </div>
  );
};

export const MiniHeader = ({ name1, name2, route1, route2 }) => {
  return (
    <div className="content_miniHeader">
      <ul className="flex_mini">
        <li>
          <ListHeader nav_name={name1} nav_route={route1} />
        </li>
        <li>
          <ListHeader nav_name={name2} nav_route={route2} />
        </li>
      </ul>
    </div>
  );
};
