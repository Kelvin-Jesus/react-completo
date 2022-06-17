import React from 'react';
import { useParams } from 'react-router-dom';
import Footer from './Footer';
import Head from './Head';
import Header from './Header';
import Loading from './Loading';
import style from './Produto.module.css'

const Produto = () => {

    const [ produto, setProduto ] = React.useState(null);
    const [ isLoading, setLoading ] = React.useState(false);
    const [ error, setError ] = React.useState('');
    const idProduto = useParams();

    React.useEffect(() => {
        const makeFetch = async () => {
            try {
                setLoading(true);
                const apiURL = `https://ranekapi.origamid.dev/json/api/produto/${idProduto.id}`
                const request = await fetch(apiURL);
                const response = await request.json();
                setProduto(await response);
            } catch ( e ) { setError('Um erro ocorreu ao tentar buscar os produtos') }
            finally {
                setLoading(false);
            }
        }
        makeFetch()
    }, [idProduto]);

    if ( isLoading ) return <Loading />;
    if ( error ) return error;
    return (
        <>
            <Head 
                title={produto && produto?.id} 
                description={ produto &&
                    `Página do produto ${produto?.nome}, ${produto?.descricao}`
                } 
            />
            <Header />
            {
                produto 
                && <div className={`${style.page_produto_container} fromLeft`}>
                        <div className={style.page_produto_imgs}>
                            {produto?.fotos.map((foto, index) => (
                                <img key={index} src={foto.src} alt={foto.titulo} />
                            ))}
                        </div>
                        <div className={style.page_produto_info}>
                            <p style={{ color: '#ccc' }}>ID: {produto.id}</p>
                            <h1>{produto.nome}</h1>
                            <p className={style.page_produto_priceCard}>R$ {produto.preco}</p>
                            <p className={style.page_produto_descricao}>{produto.descricao}</p>
                        </div>
                    </div>
            }
            <Footer />
        </>
    );
}

export default Produto;
