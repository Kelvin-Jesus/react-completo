import React from 'react';
import Produto from './Produto';

const App = () => {

    const [ s, setS ] = React.useState(true);

    return (
    <>
        <button onClick={() => setS(!s)}>Mostrar Produto</button>
        { s && <Produto titulo="titulo do produto" />}
    </>
    );
}

export default App;
