import React, { useState, useRef } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import './ContactForm.css';

function ContactForm() {
    const captcha = useRef(null);
    const [botonActivo, setBotonActivo] = useState(false);
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        mensaje: ''
    });

    const endpoint = 'https://estudioservice.onrender.com';

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();


        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                mode: 'cors',
                body: JSON.stringify(formData)

            });

            console.log('LA RESPUESTA ES:', response)

            if (response.ok) {
                console.log('Correo electrónico enviado exitosamente');
                setFormData({
                    nombre: '',
                    email: '',
                    mensaje: ''
                });

                window.grecaptcha.reset();
                // Realiza alguna acción adicional después de enviar el correo electrónico exitosamente
            } else {
                console.error('Error al enviar el correo electrónico');
                // Maneja el error de envío de correo electrónico
            }
        } catch (error) {
            console.error('Error en la solicitud de envío de correo electrónico', error);
            // Maneja el error de solicitud
        }
    };


    const onChange = () => {
        if (captcha.current.getValue()) {
            setBotonActivo(true);
        }
    }

    return (
        <div className="formulario">

            <form onSubmit={handleSubmit}>
                <input type="text" name="nombre" placeholder='Nombre' value={formData.nombre} onChange={handleChange} />
                <input type="email" name="email" placeholder='Email (requerido)' value={formData.email} onChange={handleChange} required />
                <textarea name="mensaje" placeholder='Mensaje (requerido)' value={formData.mensaje} onChange={handleChange} required />
                <div className='recaptchaContainer'>
                    <ReCAPTCHA
                        ref={captcha}
                        sitekey="6LesGPYmAAAAAK4hop2BoZaYL2uv7RWw4Vsde7xF"
                        onChange={onChange}
                        size="normal"
                    />
                </div>
                {botonActivo ? (<button className='activeButton' type="submit" >ENVIAR</button>) : (<button className='inactiveButton' disabled>ENVIAR</button>)}



            </form>

        </div>
    );
}

export default ContactForm;
