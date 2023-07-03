const express = require('express');
const cors = require('cors');
const app = express();
const nodemailer = require('nodemailer');

const PORT = process.env.PORT || 3001;

app.use(cors());

const transporter = nodemailer.createTransport({
    host: 'smtp.titan.email',
    port: 465,
    secure: true,
    auth: {
        user: "server@rodriguezyasociados.com.uy",
        pass: "0uC(!7/'7k.B-Y8"
    }
});

app.use(express.json());

app.post('/api/send-email', async (req, res) => {
    const { nombre, email, mensaje } = req.body;

    try {
        // Envia el correo electrónico utilizando el transporte configurado
        await transporter.sendMail({
            from: 'server@rodriguezyasociados.com.uy',
            to: 'suro844@gmail.com',
            subject: 'Nuevo mensaje de formulario web',
            replyTo: `${email}`,
            text: `Nombre: ${nombre}\nEmail: ${email}\nMensaje: ${mensaje}`
        });

        console.log('Correo electrónico enviado exitosamente');
        res.sendStatus(200);
    } catch (error) {
        console.error('Error al enviar el correo electrónico', error);
        res.sendStatus(500);
    }
});

app.listen(PORT, () => {
    console.log(`Servidor Express iniciado en el puerto ${PORT}`);
});
