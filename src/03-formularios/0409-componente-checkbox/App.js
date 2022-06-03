import React from 'react';
import Checkbox from './components/Checkbox';

const App = () => {

    const [ value, setValue ] = React.useState([]);

    return (
        <form>
            <Checkbox 
                options={['Azul', 'Vermelho']} 
                value={value} 
                setValue={setValue} 
            />
            <button>Enviar</button>
        </form>
    );
}

export default App;
