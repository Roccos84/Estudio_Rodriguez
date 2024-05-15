import './ServicesBadges.css';
import React, { useState } from "react";
import Swal from 'sweetalert2';
import { Modal, Button } from 'react-rainbow-components';


export default function ServicesBadges({ titulo, texto, texto1, texto2, texto3, texto4 }) {

    // Estado para controlar la visibilidad del modal y el servicio seleccionado
    const [modalVisible, setModalVisible] = useState(false);
    const [servicioSeleccionado, setServicioSeleccionado] = useState(0);

    const servicios = [
        {
            titulo: "Servicios Notariales", contenido: [{
                tituloCont: "1.	Contabilidad General: ",
                redaccionCont: "Registro de transacciones financieras, conciliaciones bancarias, estados financieros y cumplimiento de normas contables."
            },
            { tituloCont: "2.	Elaboración, Auditoría y Revisión de Estados Financieros: ", redaccionCont: "Preparación de balance general, estado de resultados y estado de flujo de efectivo." },
            { tituloCont: "3.	Análisis Financiero: ", redaccionCont: "Evaluación de la situación económica y financiera de la empresa." },
            { tituloCont: "4.	Planificación Fiscal: ", redaccionCont: "Asesoramiento en optimización de impuestos y cumplimiento tributario." },
            ]
        },
        {
            titulo: "Servicios Contables",
            contenido: [
                {
                    tituloCont: "1. Contabilidad General:",
                    redaccionCont: "Registro de transacciones financieras, conciliaciones bancarias, estados financieros y cumplimiento de normas contables."
                },
                {
                    tituloCont: "2. Elaboración, Auditoría y Revisión de Estados Financieros:",
                    redaccionCont: "Preparación de balance general, estado de resultados y estado de flujo de efectivo."
                },
                {
                    tituloCont: "3. Análisis Financiero:",
                    redaccionCont: "Evaluación de la situación económica y financiera de la empresa."
                },
                {
                    tituloCont: "4. Planificación Fiscal:",
                    redaccionCont: "Asesoramiento en optimización de impuestos y cumplimiento tributario."
                },
                {
                    tituloCont: "5. Liquidación de Impuestos:",
                    redaccionCont: "Cálculo y presentación de declaraciones juradas de impuestos."
                },
                {
                    tituloCont: "6. Gestión de Nómina y Recursos Humanos:",
                    redaccionCont: "Administración de salarios, aportes y cumplimiento laboral."
                },
                {
                    tituloCont: "7. Asesoramiento Contable:",
                    redaccionCont: "Orientación en fusiones, adquisiciones, reestructuraciones y proyectos."
                }
            ]
        }];

    let title = titulo.toUpperCase();
    let text = texto;
    let text1 = texto1;
    let text2 = texto2;
    let text3 = texto3;
    let text4 = texto4;



    const textStyles = {
        width: "80%",
        background: "linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))",
        WebkitBackdropFilter: "blur(10px)",
        boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
        fontfamily: "Noto Serif, serif"
    };



    //     const ShowServicesDesc = (e) => {
    //         e.preventDefault();

    //         Swal.fire({
    //             html: `<h3 >Servicios Contables</h3>
    //             <br>
    // <div className="verMas" style="text-align:justify; font-size:13px; ">
    // <div style="font-size:14px;">1.	Contabilidad General:</div>
    // <p style="color:#545454">Registro de transacciones financieras, conciliaciones bancarias, estados financieros y cumplimiento de normas contables.</p>
    //            <p style="color:transparent; font-size:3px;">.</p>
    //             <p><div style="font-size:14px;">2.	Elaboración, Auditoría y Revisión de Estados Financieros:</div>  Preparación de balance general, estado de resultados y estado de flujo de efectivo.</p>
    //            <p style="color:transparent; font-size:3px;">.</p>
    //             <p><div style="font-size:14px;">3.	Análisis Financiero:</div>  Evaluación de la situación económica y financiera de la empresa.</p>
    //            <p style="color:transparent; font-size:3px;">.</p>
    //             <p><div style="font-size:14px;">4.	Planificación Fiscal:</div>  Asesoramiento en optimización de impuestos y cumplimiento tributario.</p>
    //            <p style="color:transparent; font-size:3px;">.</p>
    //             <p><div style="font-size:14px;">5.	Liquidación de Impuestos:</div>  Cálculo y presentación de declaraciones juradas de impuestos.</p>
    //            <p style="color:transparent; font-size:3px;">.</p>
    //             <p><div style="font-size:14px;">6.	Gestión de Nómina y Recursos Humanos:</div>  Administración de salarios, aportes y cumplimiento laboral.</p>
    //            <p style="color:transparent; font-size:3px;">.</p>
    //             <p><div style="font-size:14px;">7.	Asesoramiento Contable:</div>  Orientación en fusiones, adquisiciones, reestructuraciones y proyectos.</p>


    //                         </div>
    //                         `,
    //             width: '95%',
    //             padding: '1',
    //             background: '#CBB49E',
    //             color: '#000',
    //             customClass: {

    //             }

    //         })
    //     }


    // Función para manejar el clic en el enlace
    const handleEnlaceClick = () => {
        // Buscar el servicio relacionado al título
        setServicioSeleccionado(servicios.find(servicio => servicio.titulo === titulo));
        if (servicioSeleccionado) {
            // Mostrar el modal y establecer el servicio seleccionado
            setModalVisible(true);
        }



    }

    return (
        <div className="badges">
            <h2>{title}</h2>
            <h4>{text}</h4>
            <h4>{text1}</h4>
            <h4>{text2}</h4>
            <h4>{text3}</h4>
            <h4>{text4}</h4>

            <a onClick={handleEnlaceClick}>
                Ver más ➤
            </a>

            <Modal isOpen={modalVisible} onRequestClose={() => setModalVisible(false)} title={title} style={textStyles} >



                {servicioSeleccionado !== 0 ? servicioSeleccionado.contenido.map((item, index) => (
                    <div style={{ textAlign: 'left' }} key={index}>
                        <h3>{item.tituloCont}</h3>
                        <hr />
                        <p>{item.redaccionCont}</p>
                        <br />
                    </div>
                )) : <p></p>}




            </Modal>

        </div>



    )
}
