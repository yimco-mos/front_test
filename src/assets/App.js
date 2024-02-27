import "../styles/App.css";
import { HeaderContent } from "./components/Header/HeaderContent";
import { Link, Route, Routes } from "react-router-dom";
import { TiendaComponent } from "./components/tienda/TiendaComponent";
import { Content } from "./components/producto/Content";
import { FormsProducto } from "./components/producto/Formsproducto";
import { TiendaFormulario } from "./components/tienda/TiendaFormulario";
import { ProductDetails } from "./components/producto/ProductoDetails";
import { useFetchGet } from "../customs/useFetch";
import { PRODUCTO_URL } from "../customs/variables";
import { Inicio } from "./components/inicio/Inicio";
import { Footer } from "./components/footer/Footer";
import { Login } from "./components/login/Login";
import { CreateUser } from "./components/login/CreateUser";
function App() {
  const { data } = useFetchGet(PRODUCTO_URL);
  const act = sessionStorage.getItem("act") || null;

  const closed = () => {
    window.location.reload();

    const confirmation = window.confirm(
      "¿Seguro que quieres cerrar la secion?"
    );

    if (confirmation) {
      sessionStorage.removeItem("act");
      sessionStorage.removeItem("adm");
      window.location.reload();
    }
  };

  return (
    <div className="App">
      <header>
        <div className="sub_header">
          <div className="content_login">
            <button>
              {act ? (
                <div onClick={closed}>Salir</div>
              ) : (
                <Link to={"/login"}>Login</Link>
              )}
            </button>
          </div>
        </div>

        <HeaderContent />
      </header>

      <div style={{ marginTop: "150px" }}>
        <Routes>
          <Route path="/" element={<Inicio />} />

          {!act && (
            <>
              <Route path="/login" element={<Login />} />

              <Route path="/registrarse" element={<CreateUser />} />
            </>
          )}

          {act ? (
            <>
              <Route path="/tiendas" element={<TiendaComponent />} />
              <Route path="/productos" element={<Content />} />
              <Route
                path="/productos/details/:id"
                element={<ProductDetails producto={data} />}
              />
              <Route
                path="/tiendas/add_tiendas"
                element={<TiendaFormulario titulo_form="Crear Nueva Tienda" />}
              />
              <Route
                path="/productos/add_productos"
                element={<FormsProducto />}
              />
              <Route
                path="/tiendas/edit_tiendas/:id"
                element={<TiendaFormulario titulo_form="Editar Tienda:" />}
              />
              <Route
                path="/productos/edit_prod/:id"
                element={<FormsProducto />}
              />
            </>
          ) : (
            <>
              {" "}
              <Route path="*" element={<Inicio />} />{" "}
            </>
          )}
        </Routes>
      </div>

      <footer
        className="site-footer"
        id="#contactos"
        style={{ background: "#0a0a0a" }}
      >
        <Footer />
      </footer>
    </div>
  );
}

export default App;
