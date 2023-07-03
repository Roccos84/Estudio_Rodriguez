import React, { useEffect, useState } from 'react';
import './PantallaEnConst.css';
import logoWeb from '../img/underConstrImgWEB.png'
import logoMobil from '../img/underConstrImgMOBILE.png'

function sendEmail() {
    window.location = "mailto:estudio@rodriguezyasociados.com.uy";
}


function PantallaEnConst() {

    return (
        <div className='underConstr'>

            <img className='img' src={logoWeb} alt="Logo" />
            <h1>Sitio Web <br /> en Construcción... </h1>

            <button type='button' onClick={sendEmail}>CONTACTO</button>
        </div>
    )
}

export default PantallaEnConst