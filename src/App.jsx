import { Router, Routes, Route } from 'react-router-dom'
import Nav from './pages/nav'
import Nosotros from './pages/nosotros'
import Inicio from './pages/inicio'
import Servicios from './pages/Servicios'
import Productos from './pages/Productos'
import ProductoDetalle from './pages/Detalles-producto'

function App() {

  return (
    <>      
      <Nav />
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/servicios' element={<Servicios/>} />
        <Route path='/nosotros' element={<Nosotros/>} />
        <Route path='/productos' element={<Productos />} />
        <Route path='/productos/:id' element={<ProductoDetalle />} />
      </Routes>
    </>
  );
}

export default App
