import React from 'react';
import Head from '../components/Head';
import Header from '../components/Header';
import style from './Contato.module.css';
import foto from './../img/contato.jpg';
import Footer from '../components/Footer';

const Contato = () => {
    return (
        <>
            <Head title="Contato" description="Página de contato do projeto nBuy" />
            <Header />
            <section className={`${style.contato} fromLeft`}>
                <img src={foto} alt="Máquina de escrever" />
                <div>
                    <h1>Entre em contato.</h1>
                    <ul className={style.dadosContato}>
                        <li>contato@nbuy.com.br</li>
                        <li>9999-9999</li>
                        <li>Rua Se o Sylvinho é Treinador Eu Sou um Astronauta, 2021</li>
                    </ul>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Contato;
