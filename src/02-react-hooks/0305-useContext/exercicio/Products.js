import { useContext } from 'react';
import { GlobalContext } from './GlobalContext';

const Products = () => {

    const globalData = useContext(GlobalContext)
    if ( globalData.data === null ) return null

    return (
        <div>
            <ul>
                {globalData.data?.map(item => <li key={item.id}>{item.nome}</li>)}
            </ul>
        </div>
    );
}

export default Products;
