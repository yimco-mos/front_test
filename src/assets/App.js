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
import Inicio from "./components/inicio/Inicio";
import { Footer } from "./components/footer/Footer";
import { Login } from "./components/login/Login";
function App() {
  const { data } = useFetchGet(PRODUCTO_URL);


  return (
    <div className="App">
      <header>
        <div className="sub_header">
          <div className="content_login">
            <button><Link to={'/login'}>Login</Link></button>
          </div>
        </div>

        <HeaderContent />
      </header>

      <div style={{ marginTop: "150px" }}>
        <Routes>

          <Route path="/" element={<Inicio />} />

  <Route path="/login" element={ <Login /> } />



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
          <Route path="/productos/add_productos" element={<FormsProducto />} />
          <Route
            path="/tiendas/edit_tiendas/:id"
            element={<TiendaFormulario titulo_form="Editar Tienda:" />}
          />
          <Route path="/productos/edit_prod/:id" element={<FormsProducto />} />
        </Routes>
      </div>

      <footer className="site-footer" id="#contactos" style={{ background: "#0a0a0a" }}>
      <Footer/>
      </footer>
    </div>
  );
}

export default App;
