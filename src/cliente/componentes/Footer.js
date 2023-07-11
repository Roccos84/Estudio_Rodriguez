import React from 'react'
import './Footer.css';

function Footer() {
    return (
        <div className='footerDiv'>
            <p>Rodríguez & Asociados &nbsp;  © &nbsp;    {new Date().getFullYear()}</p>
        </div>
    )
}

export default Footer
