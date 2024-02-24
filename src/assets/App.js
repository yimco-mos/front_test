import '../styles/App.css';
import { HeaderContent } from './components/Header/HeaderContent';
import {  Route,Routes } from 'react-router-dom';
import { TiendaComponent } from './components/tienda/TiendaComponent';
import { Content } from './components/producto/Content';
import { FormsProducto } from './components/producto/Formsproducto';
import { TiendaFormulario } from './components/tienda/TiendaFormulario';
import { ProductDetails } from './components/producto/ProductoDetails';
import { useFetchGet } from '../customs/useFetch';
import { PRODUCTO_URL } from '../customs/variables';
function App() {
  const {data}=useFetchGet(PRODUCTO_URL)
  return (
    <div className="App">
     
        <header>
      <div className="sub_header">

     <div className='content_login'> <button>login</button></div>

      </div>

          <HeaderContent />
        </header>
       
    <div style={{marginTop:'150px'}}>
    <Routes>
        <Route path="/tiendas" element={ <TiendaComponent /> } />
        <Route path="/productos" element={ <Content /> } />
        <Route path="/productos/details/:id" element={ <ProductDetails producto={data} /> } />
        <Route path="/tiendas/add_tiendas" element={<TiendaFormulario titulo_form='Crear Nueva Tienda'/>} />
        <Route path="/productos/add_productos" element={<FormsProducto />} />
        <Route path="/tiendas/edit_tiendas/:id" element={<TiendaFormulario titulo_form='Editar Tienda:'  />} />
        <Route path="/productos/edit_prod/:id" element={<FormsProducto />} />
          
          </Routes>

    </div>

    <footer>


    </footer>

    </div>
  );
}

export default App;
