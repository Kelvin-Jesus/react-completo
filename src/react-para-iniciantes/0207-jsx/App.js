import React from 'react';

const App = () => {
    
    const random = Math.random()
    const titulo = <h1>Aqui um título</h1>

    const carro = {
        marca: 'Ford',
        rodas: '4'
    }

    const style1 = {
        color: 'blue',
        fontSize: '20px',
        fontFamily: 'Helvetica'
    }

    return (
        <>
            {titulo}
            {new Date().getTime()}
            <p>{new Date().getFullYear()}</p>
            <p style={style1}>{carro.marca}</p>
            <p>{carro.rodas}</p>
            <input style={ true ? {display:'block'} : {display:'none'} } />
            <a href="https://kj.com" title="Isso é um site" className="btn-link" htmlFor="nome">
                Origamid
            </a>
            {random}
        </>
    )
}

export default App;