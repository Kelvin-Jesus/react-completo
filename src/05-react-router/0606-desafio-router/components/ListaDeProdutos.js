import React from 'react';
import { Link } from 'react-router-dom';
import styleP from './Produto.module.css';
import styles from './ListaDeProdutos.module.css';
import Loading from './Loading';

const ListaDeProdutos = () => {

    const [ isLoading, setLoading ] = React.useState(false);
    const [ produtos, setProdutos ] = React.useState([]);
    const [ error, setError ] = React.useState('');

    React.useEffect(() => {
        const makeFetch = async () => {
            try {
                setLoading(true);
                const apiURL = 'https://ranekapi.origamid.dev/json/api/produto';
                const request = await fetch(apiURL);
                const response = await request.json();
                setProdutos(await response);
            } catch ( e ) { setError('Um erro ocorreu ao buscar os produtos') }
            finally { setLoading(false) }
        }
        makeFetch()
    }, [])
        
    if ( isLoading ) return <Loading />;
    if ( error ) return error;
    return (
        <ul className={`${styles.lista_produtos} fromLeft`}>
            { 
                produtos && 
                produtos.map( produto => (
                    <Link className={styleP.produtoContainer} to={'produto/' + produto.id} key={produto.id}>
                        <img src={produto?.fotos[0].src} alt={produto?.fotos[0].titulo} />
                        <p>{produto.nome}</p>
                    </Link>
                )) 
            }
        </ul>
    );
}

export default ListaDeProdutos;
