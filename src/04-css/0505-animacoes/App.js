import React from 'react';
import Produto from './components/Produto';
import './components/app.css';

const App = () => {

    const [ active, setActive ] = React.useState();

    return (
        <div>
            <button onClick={() => setActive(!active)}>Ativar</button>
            {active && <Produto />}
        </div>
    );
}

export default App;
