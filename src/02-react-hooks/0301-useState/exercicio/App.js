import React, { useState } from 'react';
import Button from './components/Button';

// Os links abaixo puxam dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado


const App = () => {

    const [ isLoading, setIsLoading ] = useState(false)
    const [ productData, setProductData ] = useState()

    const handleClick = async e => {
        setIsLoading( true )
        const request = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${e.target.innerText.toLowerCase()}`)
        const response = await request.json()
        setProductData(response)
        setIsLoading( false )
    }

    return (
        <div>
            <div style={{ display: 'flex' }}>
                <Button onClick={handleClick}>Notebook</Button>
                <Button onClick={handleClick}>Smartphone</Button>
                <Button onClick={handleClick}>Tablet</Button>
            </div>
            
            <p>{ isLoading ? 'Carregando...' : '' }</p>

            {productData && <div>
                <h1>{productData.nome}</h1>
                <p>R$ {productData.preco}</p>
                <ul>
                    {productData.fotos.map( foto => <li key={foto.titulo}><img src={foto.src} /></li>)}
                </ul>
            </div>}

        </div>
    );
}

export default App;
