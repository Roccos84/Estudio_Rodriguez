import './HomePage.css';
import Carrousel from './Carrousel';
import Navbar from './Navbar/Navbar';

export default function Home() {

    return (
        <div>
            <Navbar />
            <Carrousel />

            <div className="coso">
                <h2 className='mensaje'>CONTANDI LTDA. más de {new Date().getFullYear() - 1978} de años al servicio de nuestros clientes.
                </h2>
            </div>
        </div>
    )
}