import React from 'react';
import styles from './Produto.module.css'

const Produto = () => {
    return (
        <div >
            <h1 className={styles.titulo}>Notebook</h1>
            <button className={styles.botao_comprar}>Comprar</button>
        </div>
    );
}

export default Produto;