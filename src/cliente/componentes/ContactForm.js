import './ContactForm.css';
import React, { useState, useRef } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import Swal from 'sweetalert2';


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
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, *cors, same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                    'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                redirect: 'follow', // manual, *follow, error
                referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                body: JSON.stringify(formData) // body data type must match "Content-Type" header

            });

            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Su mensaje se ha enviado correctamente!',
                showConfirmButton: false,
                timer: 2000
            })


            setFormData({
                nombre: '',
                email: '',
                mensaje: ''
            });

            window.grecaptcha.reset();
            setBotonActivo(false);



        } catch (error) {
            console.error('Error en la solicitud de envío de correo electrónico', error);

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
                <label htmlFor="name"></label>
                <input id='name' type="text" name="nombre" placeholder='Nombre' value={formData.nombre} onChange={handleChange} autoComplete="on" />
                <label htmlFor="mail"></label>
                <input id='mail' type="email" name="email" placeholder='Email (requerido)' value={formData.email} onChange={handleChange} required autoComplete="on" />
                <label htmlFor="message"></label>
                <textarea id='message' name="mensaje" placeholder='Mensaje (requerido)' value={formData.mensaje} onChange={handleChange} required />
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
