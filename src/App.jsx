import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import BarraDeNavegacion from './components/BarraDeNavegacion';
import Presentacion from './components/Presentacion';
import Inicio from './components/Inicio';
import Footer from './components/Footer';
import Contacto from './components/Contacto';

function App() {

  return (
    <>
    {/* <Presentacion></Presentacion> */}
    <div className="page-container">
    <BarraDeNavegacion></BarraDeNavegacion>
    <div className="content-wrap">
      {/* Contenido principal de la página */}
    <Inicio></Inicio>
    {/* <Contacto></Contacto> */}
    </div>
  </div>
  <Footer></Footer>
  </>
  )
}

export default App
