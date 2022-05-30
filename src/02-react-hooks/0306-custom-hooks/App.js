import React, { useEffect } from 'react';
import useLocalStorage from './hooks/useLocalStorage';
import useFetch from './hooks/useFetch';

const App = () => {

    const [ produto, setProduto ] = useLocalStorage('produto', '');
    const { request, data, loading, error } = useFetch();

    useEffect(async () => {
       const { requestData, response } = await request('https://ranekapi.origamid.dev/json/api/produto/notebook');
    }, [request]);


    const handleClick = ({ target }) => {
        setProduto(target.textContent)
    }

    console.log(error)
    if ( error ) return <p>{error.message}</p>
    if ( loading ) return <div>Carregando...</div>;
    if ( data ) 
        return (
            <>
                <button onClick={handleClick}>Notebook</button>
                <button onClick={handleClick}>Smartphone</button>
                <p>{produto}</p>
                <section>
                    {data.map(produto => <li key={produto.id}>{produto.nome}</li>)}
                </section>
            </>
        );
    else return null;

}

export default App;
