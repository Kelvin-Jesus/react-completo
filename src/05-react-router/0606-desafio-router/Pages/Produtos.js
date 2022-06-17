import React from 'react';
import Footer from '../components/Footer';
import Head from '../components/Head';
import Header from '../components/Header';
import ListaDeProdutos from '../components/ListaDeProdutos';

const Produtos = () => {
    return (
        <>
            <Head title="Home" description="Página home do projeto nBuy" />
            <Header />
            <section>
                <ListaDeProdutos />
            </section>
            <Footer />
        </>
    );
}

export default Produtos;
