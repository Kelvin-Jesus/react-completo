import React from 'react';
import Header from './Header';

const App = () => {

    const [ativo, setAtivo] = React.useState(false);
    return (
    <>
        <Header />
        <button onClick={() => setAtivo(!ativo)}>ativar</button>
    </>
    );
}

export default App;
