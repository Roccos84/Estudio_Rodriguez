import React, { useEffect, useState } from 'react';
import './App.css';
import Servicios from './componentes/Servicios';
import PantallaEnConst from './componentes/PantallaEnConst';
import Contacto from './componentes/Contacto';
import Nosotros from './componentes/Nosotros';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './componentes/HomePage';
import Navbar from './componentes/Navbar/Navbar';


function App() {
  return (

    <>
      <div className='ppalDiv' >

        <Router>
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/nosotros' component={Nosotros} />
            <Route path='/servicios' exact component={Servicios} />
            <Route path='/contacto' exact component={Contacto} />
          </Switch>
        </Router>
      </div>
    </>
    ////////////////////////////////////////////////////

    //   {/* <div>
    //     <PantallaEnConst />
    //   </div> */}


    //   <Router>
    //     <Routes>

    //       <Route exact path='/' element={<Home />} />
    //       {/* <Route exact path='/inicio' element={<Home />} /> */}
    //       <Route to='/nosotros' component={Nosotros} />
    //       <Route path='/servicios' element={<Servicios />} />
    //       <Route path='/contacto' element={<Contacto />} />


    //     </Routes>

    //     <hr className="solid"></hr>
    //     <Nosotros />
    //     <hr className="solid"></hr>
    //     <Servicios />
    //     <hr className="solid"></hr>
    //     <Contacto />

    //   </Router>



    // </div>
  );
}

export default App;
