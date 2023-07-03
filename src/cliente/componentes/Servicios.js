import './Servicios.css';
import React from 'react'
import ServicesBadges from './ServicesBadges';


function Servicios() {



    return (


        <div className="serviciosComp">
            <p className='serviciosTitulo'>NUESTROS SERVICIOS</p>
            <div className="placasServices">
                <ServicesBadges titulo={'Servicios Contables'} texto={'• Contabilidad en general.'} texto1={'• Asesoramiento impositivo a personas físicas y jurídicas.'} texto2={'• Análisis y elaboración de Estados Financieros.'} texto3={'• Asesoramiento Laboral y Tributario.'} texto4={'• Gestion de nomina y Recursos Humanos.'} />
                <ServicesBadges titulo={'Servicios Notariales'} texto={'• Escrituras, Certificaciones y Actas Notariales.'} texto1={'• Sucesiones y Testamentos.'} texto2={'• Constitución y modificaciones de Sociedades.'} />
            </div>

        </div>

    )
}


export default Servicios
