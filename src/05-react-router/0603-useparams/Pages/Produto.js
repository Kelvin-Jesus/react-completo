import react from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Header from '../components/Header';

const Produto = () => {

    const params = useParams();
    const location = useLocation();

    return (
        <section>
            <Header />
            {params.id && params?.id.charAt(0).toUpperCase() + params.id.slice(1)}
            <p>{new URLSearchParams(location.search).get('mole')}</p>
        </section>
    );
}

export default Produto;