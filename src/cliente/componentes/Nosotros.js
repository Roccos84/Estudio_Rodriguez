import './Nosotros.css';
import React from 'react';


function Nosotros() {


    return (
        <div className="nosotrosContainer" >
            <div className="glassContainer">

                <p className='nosotrosTitulo'>QUIENES SOMOS...</p>
                <p className='nosotrosRedaccion'>Con más de {new Date().getFullYear() - 1978} años de sólida trayectoria en el mercado, nuestro Estudio se ha consolidado exitosamente tanto en el Departamento de Maldonado como en otras localidades y zonas del país.
                    Desde un inicio, hemos mantenido una firme adhesión a nuestros valores y un compromiso inquebrantable con la Ética Profesional, lo que nos ha permitido posicionarnos como referentes en el ámbito contable y notarial, manteniéndonos vigentes hasta el día de hoy. Valoramos enormemente la confianza que nuestros clientes han depositado en nosotros a lo largo de los años.
                    Comprendemos plenamente la importancia de adaptarnos a las necesidades cambiantes de nuestros clientes, buscando establecer relaciones sólidas y duraderas basadas en la confianza mutua, el respeto y el profesionalismo.
                    Nuestro equipo de trabajo está conformado por jóvenes profesionales altamente capacitados y comprometidos con la excelencia y la actualización constante. Poseen un profundo conocimiento y una amplia experiencia en las  transformaciones Legales Tributarias aplicables a los Organismos Nacionales y/o Departamentales.

                    En <u>RODRIGUEZ & ASOCIADOS</u> nos comprometemos a seguir creciendo y evolucionando junto con nuestros clientes, siempre a la vanguardia de los cambios y desafíos del entorno empresarial y legal. Nos enorgullece ser su aliado estratégico, brindando soluciones de calidad y contribuyendo a su éxito empresarial de manera integral.</p>
            </div>
        </div>
    );
}

export default Nosotros;