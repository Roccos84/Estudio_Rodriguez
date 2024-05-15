import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './wpButton.css'; // Archivo de estilos CSS para el botón flotante

function WpButton() {

    function abrirWhatsAppWeb() {
        var url = "https://wa.me/59892834934";
        window.open(url, "_blank");
    }

    return (
        <button className="floating-button">
            <FontAwesomeIcon icon={faWhatsapp} fontSize={50} style={{ color: '#fff' }} onClick={abrirWhatsAppWeb} />
        </button>
    );
}

export default WpButton;
