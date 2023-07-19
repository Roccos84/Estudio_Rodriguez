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
                        <FontAwesomeIcon icon={faLocationDot} style={{ color: "#ffffff", }} /><a href='https://goo.gl/maps/rzBAeTqT15aUmfoB8' target="_blank">Avda. España 668, Maldonado (Uruguay)</a> <br />
                    </div>
                    <div className='contactLinks'>
                        <FontAwesomeIcon icon={faPhone} style={{ "--fa-primary-color": "#ffffff", "--fa-secondary-color": "#ffffff", }} /><a href='tel:+59842225782'>(+598) 42224928</a> <br />
                    </div>
                    <div className='contactLinks'>
                        <FontAwesomeIcon icon={faMobileScreen} style={{ color: "#ffffff", }} /><a href='https://wa.me/59892834934' target="_blank">(+598) 092834934</a> <br />
                    </div>
                    <div className='contactLinks4'>
                        <FontAwesomeIcon icon={faEnvelope} /><a href="mailto:estudio@rodriguezyasociados.com.uy">estudio@rodriguezyasociados.com.uy</a> <br />
                    </div>

                </div>
                <div className="contactForm">
                    <ContactForm />
                </div>

            </div>
        </div>
    );
}

export default Contacto;