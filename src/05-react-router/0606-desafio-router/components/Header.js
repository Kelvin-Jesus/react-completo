import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <Link className={styles.header__link} to="/">Produtos</Link>
            <Link className={styles.header__link} to="/contato">Contato</Link>
        </header>
    );
}

export default Header;
