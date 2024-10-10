import styles from './Card.module.css';
import iconeFavoritar from './favoritar.png';


function Card({ titulo, capa }) {
    return (
        <div className={styles.container} >
            <img src={capa} alt={titulo} className={styles.capa} />
            <h2>{titulo}</h2>
            <img src={iconeFavoritar} alt="Favoritar Icone" className={styles.favoritar} />
        </div>
    )
}

export default Card;