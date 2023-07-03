import './ServicesBadges.css';
import React from 'react'

export default function ServicesBadges({ titulo, texto, texto1, texto2, texto3, texto4 }) {

    let title = titulo;
    let text = texto;
    let text1 = texto1;
    let text2 = texto2;
    let text3 = texto3;
    let text4 = texto4;

    return (
        <div className="badges">
            <h2>{title}</h2>
            <h4>{text}</h4>
            <h4>{text1}</h4>
            <h4>{text2}</h4>
            <h4>{text3}</h4>
            <h4>{text4}</h4>
            <a href=' ' target="_blank">Ver más ➤</a>


        </div>


    )
}
