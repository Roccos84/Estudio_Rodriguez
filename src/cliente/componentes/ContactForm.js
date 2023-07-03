import React, { useState } from 'react';
import './ContactForm.css';

function ContactForm() {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        mensaje: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3001/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)

            });

            if (response.ok) {
                console.log('Correo electrónico enviado exitosamente');
                setFormData({
                    nombre: '',
                    email: '',
                    mensaje: ''
                });
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

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Nombre:
                <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
            </label>
            <label>
                Email:
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </label>
            <label>
                Mensaje:
                <textarea name="mensaje" value={formData.mensaje} onChange={handleChange} />
            </label>
            <button type="submit">Enviar</button>
        </form>
    );
}

export default ContactForm;
