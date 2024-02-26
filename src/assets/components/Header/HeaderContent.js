import React from "react";
import "../../../styles/header/header.css";
import "../../../styles/header/menus.css";
import { Menuscreen, MenuMovil } from "./components/Menuscreen";
import { useMenu } from "../../../customs/useMenu";
import { Link } from "react-router-dom";
export const HeaderContent = () => {
  const { isMenuOpen, toggleMenu } = useMenu();

  return (
      <div className="content_header ">



      <div className="content_logo"><Link to={"/"}>

      <div className="logo_shop"></div>
      </Link>
      </div>

      <div className="menuMovil">
      <div className="menuControl">

        <button onClick={toggleMenu} className="control_menu">
          {isMenuOpen ?  (<img src="https://img.icons8.com/color/48/twitterx--v2.png" alt="img" />):(<img src="https://img.icons8.com/color/150/circled-menu.png" alt="img" />) }
        </button>
      </div>
      <MenuMovil menuOpen={isMenuOpen} menuToggle={toggleMenu} />

      </div>
     

      <nav className="MenuScreen">
        <Menuscreen />
      </nav>
    </div>
  );
};
