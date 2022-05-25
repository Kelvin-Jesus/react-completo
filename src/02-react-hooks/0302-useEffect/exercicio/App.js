import React, { useState, useEffect } from 'react';

import Produto from './components/Produto';

const App = () => {

    const [ produto, setProduto ] = useState(null)

    // Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
    // https://ranekapi.origamid.dev/json/api/produto/notebook
    // https://ranekapi.origamid.dev/json/api/produto/smartphone
    // Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
    // Defina o produto clicado como uma preferência do usuário no localStorage
    // Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo

    useEffect(() => {
        return localStorage.getItem('produto') ? handleFetch(localStorage.getItem('produto')) : null;
    }, [])

    const handleFetch = (product) => {
        fetch(`https://ranekapi.origamid.dev/json/api/produto/${product}`)
            .then( r => r.json() )
            .then( json => setProduto(json) )
    }

    useEffect(() => localStorage.setItem('produto', produto?.nome), [produto])

    return (
        <div>

            <h1>Preferência: {produto && produto.nome}</h1>

            <button onClick={() => handleFetch('notebook')} style={{marginRight: '1rem'}}>Notebook</button>
            <button onClick={() => handleFetch('smartphone')}>Smartphone</button>

            {produto && <Produto data={produto} />}
            
        </div>
    );
}

export default App;
