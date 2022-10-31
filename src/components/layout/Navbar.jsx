import styles from './Navbar.module.css'
import Container from './Container'
import logo from '../../img/costs_logo.png'

import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Container>
                <Link to="/" onClick={() => {window.location.href = "/"}}><img src={logo} alt="Logo da Costs" /></Link>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to="/" onClick={() => { window.location.href = "/" }}>Home</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/projects" onClick={() => { window.location.href = "/projects" }}>Projetos</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/company" onClick={() => { window.location.href = "/company" }}>Empresa</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/contact" onClick={() => { window.location.href = "/contact" }}>Contato</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}

export default Navbar