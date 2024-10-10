
import { Link } from 'react-router-dom';
import styles from './Cabecalho.module.css';
import CabecalhoLink from 'componentes/CabecalhoLink';
import Logo from './logo.png';


function Cabecalho() {
    return (
        <header className={styles.cabecalho}>
            <Link to="./">
                <img src={Logo} alt="logo do cinetag" />
            </Link>
            <nav>
                <CabecalhoLink url="./"> Home </CabecalhoLink>
                <CabecalhoLink url="./favoritos"> Favoritos </CabecalhoLink>
            </nav>
        </header>
    )
}

export default Cabecalho;