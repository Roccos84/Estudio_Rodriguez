import './HomePage.css';
import Carrousel from './Carrousel';
import Nosotros from './Nosotros';
import Servicios from './Servicios';
import Contacto from './Contacto';

export default function Home() {

    return (
        <div>
            <Carrousel />

            <div className="coso">
                <h2 className='mensaje'>CONTANDI LTDA. más de {new Date().getFullYear() - 1978} de años al servicio de nuestros clientes.
                </h2>
            </div>
            <Nosotros />
            <Servicios />
            <Contacto />
        </div>
    )
}