import React from 'react';

const App = () => {

    // const produtos = [ 'notebook', 'iphone', 'paninho de limpar' ];
    // const empresas = [ <li key="e1">Apple</li>, <li key="e2">Google</li>, <li key="e3">Samsung</li> ];
    // const filmes = [ 'before Sunrise', 'Before Sunset', 'Before Midnight' ];

    const livros = [
        { nome: 'A Game of Thrones', ano: 1996 },
        { nome: 'A Clash of Kings', ano: 1998 },
        { nome: 'A Storm of Swords', ano: 2000 },
      ];

    return (
        <>
            {/* <div>{empresas}</div>
            <div>
                { filmes.map( (f, index) => <li key={index + f}>{f}</li> ) }
            </div> */}
            <ul>
                {livros.filter( ({ano}) => ano >= 1998 ).map(( {nome, ano}) => {
                    return <li key={ano}>{nome}</li>
                })}
            </ul>
        </>
    );

}

export default App;
