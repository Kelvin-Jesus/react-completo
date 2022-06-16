import React from 'react';
import { Helmet } from 'react-helmet';
import Head from '../components/Head';

const Sobre = () => {

    return (
        <section>
            {/* <Head title="Sobre" description="Descrição da página Sobre"/> */}
            <Helmet>
                <title>Project | Home</title>
                <meta name="description" content='Essa é a descrição da Home' />
                <script src="https://cdn.tailwindcss.com"></script>
            </Helmet>
            <h1>Página sobre aqui</h1>
            <button className="bg-purple-500 hover:bg-purple-200">Save changes</button>
        </section>
    );

}

export default Sobre;