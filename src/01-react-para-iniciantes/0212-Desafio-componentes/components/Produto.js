import React from 'react';

const Produto = (props) => {
    return (
        <div>
            <h3>{props.nome}</h3>
            <ul>{props.children.map( (i, index) => <li key={i + index}>{i}</li> )}</ul>
        </div>
    );
}

export default Produto;
