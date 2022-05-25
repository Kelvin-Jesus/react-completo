import React, { useContext } from 'react';
import {GlobalContext} from './GlobalContext';

const Produto = () => {

    const global = useContext(GlobalContext)
    document.body.classList.add(global.theme ?? 'white')

    console.log(global)

    const handleClick = () => {
        global.setCount(count => count+1)
    };

    return (
        <div >
            <p>User: {global.name}</p>
            <p>Products Count: {global.count}</p>
            <button onClick={handleClick}>Add</button>
        </div>
    );
}

export default Produto;
