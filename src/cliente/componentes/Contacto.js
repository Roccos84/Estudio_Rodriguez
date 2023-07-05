import './Contacto.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faMobileScreen, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import ContactForm from './ContactForm';

function Contacto() {


    return (
        <div className="contactContainer" >
            <div className='titleContact'>
                <p >CONTACTO</p>
                <hr className="solid"></hr>

            </div>
            <div className="mascara">

                <div className="contactInfo">

                    <div className='contactLinks1'>
                        <FontAwesomeIcon icon={faLocationDot} style={{ color: "#ffffff", }} />&nbsp;<a href='https://goo.gl/maps/rzBAeTqT15aUmfoB8' target="_blank">Avda. España 668, Maldonado (Uruguay)</a> <br />
                    </div>
                    <div className='contactLinks'>
                        <FontAwesomeIcon icon={faPhone} style={{ "--fa-primary-color": "#ffffff", "--fa-secondary-color": "#ffffff", }} />&nbsp;<a href='tel:+59842225782'>(+598) 42225782</a> <br />
                    </div>
                    <div className='contactLinks'>
                        <FontAwesomeIcon icon={faMobileScreen} style={{ color: "#ffffff", }} />&nbsp;<a href='https://wa.me/59892834934' target="_blank">(+598) 092834934</a> <br />
                    </div>
                    <div className='contactLinks4'>
                        <FontAwesomeIcon icon={faEnvelope} />&nbsp;<a href="mailto:estudio@rodriguezyasociados.com.uy">estudio@rodriguezyasociados.com.uy</a> <br />
                    </div>

                    {/* <div className='frame'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1635.8934971530684!2d-54.965208694682936!3d-34.91179459817576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x957511efffdc0d6f%3A0x948e944225c07538!2sEstudio%20Rodr%C3%ADguez%20%26%20Asociados%20(CONTANDI%20LTDA.)!5e0!3m2!1ses-419!2suy!4v1687191652774!5m2!1ses-419!2suy" width="300" height="200" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div> */}
                </div>
                <div className="contactForm">
                    <ContactForm />
                </div>

            </div>
        </div>
    );
}

export default Contacto;