import React from 'react';
import Links from "../Links";
import Titulo from "../Titulo";

const Produtos = (props) => {
    return (
        <div>
            <Links />
            <Titulo titulo={'Produtos'} />
            {props.children}
        </div>
    );
}

export default Produtos;
