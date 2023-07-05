import React from 'react';
import './App.css';
import Navbar from './componentes/Navbar/Navbar';
import Carrousel from './componentes/Carrousel';
import Servicios from './componentes/Servicios';
import PantallaEnConst from './componentes/PantallaEnConst';
import Contacto from './componentes/Contacto';
import Nosotros from './componentes/Nosotros';

function App() {
  return (

    // <div>
    //   <PantallaEnConst />
    // </div>
    <div className='ppalDiv' >
      <div className="coso">
        <Navbar />
        <Carrousel />
        <h2 className='mensaje'>CONTANDI LTDA. más de {new Date().getFullYear() - 1978} de años al servicio de nuestros clientes.
        </h2>
      </div>
      <hr className="solid"></hr>
      <Nosotros />
      <hr className="solid"></hr>
      <Servicios />
      <hr className="solid"></hr>
      <Contacto />

    </div>
  );
}

export default App;
