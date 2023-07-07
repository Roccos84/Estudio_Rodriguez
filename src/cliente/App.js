import React from 'react';
import './App.css';
import Servicios from './componentes/Servicios';
import PantallaEnConst from './componentes/PantallaEnConst';
import Contacto from './componentes/Contacto';
import Nosotros from './componentes/Nosotros';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './componentes/HomePage';

function App() {
  return (
    <div className='ppalDiv' >
      {/* <div>
        <PantallaEnConst />
      </div> */}


      <Router>
        <Routes>

          <Route path='/' element={<Home />} />
          <Route exact path='/inicio' element={<Home />} />
          <Route path='/nosotros' element={<Nosotros />} />
          <Route path='/servicios' element={<Servicios />} />
          <Route path='/contacto' element={<Contacto />} />


        </Routes>

        <hr className="solid"></hr>
        <Nosotros />
        <hr className="solid"></hr>
        <Servicios />
        <hr className="solid"></hr>
        <Contacto />

      </Router>



    </div>
  );
}

export default App;
