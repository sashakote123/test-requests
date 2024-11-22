import { Link } from "react-router";
import styles from './styles.module.css'
const NavBar = () => {
    return (
        <ul className={styles.navbar}>
            <li className={styles.navbar__item}><Link to='/'>Оставить заявку</Link></li>
            <li className={styles.navbar__item}><Link to='/requests'>Посмотреть заявки</Link></li>
        </ul>
    );
}

export default NavBar;