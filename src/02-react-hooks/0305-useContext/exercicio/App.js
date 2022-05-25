// Utilize o GlobalContext do exemplo anterior para puxar os dados da API abaixo:
// https://ranekapi.origamid.dev/json/api/produto/
// assim que o usuário acessar o app
// coloque os dados da API no contexto global, dando acesso aos dados da mesma
// defina uma função chamada limparDados que é responsável por zerar os dados de produto
// e exponha essa função no contexto global
import React, { useContext } from 'react';
import Products from './Products';
import { GlobalStorage } from './GlobalContext';
import ClearData from './ClearData';

const App = () => {

    // console.log(globalData, GlobalContext, GlobalStorage)

    return (
        <GlobalStorage>
            <Products />
            <ClearData />
        </GlobalStorage>
    );
}

export default App;
