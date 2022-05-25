import React, { useState, useEffect } from 'react';

import Produto from './components/Produto/Produto';

const App = () => {

    // const [ counter, setCounter ] = useState(0);
    // const [ data, setData ] = useState(null);

    // useEffect(() => {
    //     fetch('https://ranekapi.origamid.dev/json/api/produto/notebook')
    //         .then(r => r.json())
    //         .then(jsonData => setData(jsonData))
    // }, [])

    const [ ativo, setAtivo] = useState(false)


    return (
        <div>

            {/* { data && (
                <>
                    <p>{data.nome}</p>
                    <p>R$ {data.preco * counter}</p>
                </>
            ) }

            <button onClick={() => setCounter(counter + 1)}>{counter}</button> */}

            { ativo && <Produto />}

            <button onClick={() => setAtivo( !ativo )}>ativar</button>
        
        </div>
    );
}

export default App;
