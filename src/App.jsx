import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Presentacion from './components/Presentacion';
import Inicio from './components/Inicio';
import Contacto from './components/Contacto';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Presentacion></Presentacion>}></Route>
        <Route exact path='/inicio' element={<MainLayout><Inicio></Inicio></MainLayout>}></Route>
        <Route exact path='/servicios/cv_basico' element={<MainLayout><Inicio></Inicio></MainLayout>}></Route>
        <Route exact path='/servicios/sitio_personal' element={<MainLayout><Inicio></Inicio></MainLayout>}></Route>
        <Route exact path='/servicios/pagina_info' element={<MainLayout><Inicio></Inicio></MainLayout>}></Route>
        <Route exact path='/contacto' element={<MainLayout><Contacto></Contacto></MainLayout>}></Route>
        <Route exact path='/sobre_nosotros' element={<MainLayout></MainLayout>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
