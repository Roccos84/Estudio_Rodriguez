import './Footer.css';
import React from 'react'

function Footer() {
    return (
        <div className='footerDiv'>
            <p>Rodríguez & Asociados &nbsp;  © &nbsp;    {new Date().getFullYear()}</p>
        </div>
    )
}

export default Footer
