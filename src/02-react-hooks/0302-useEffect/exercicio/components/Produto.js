import React from 'react';

const Produto = ({ data }) => {

    return (
        <div>
            <p>{data?.nome}</p>
            <p>R$ {data?.preco}</p>
        </div>
    );
}

export default Produto;
