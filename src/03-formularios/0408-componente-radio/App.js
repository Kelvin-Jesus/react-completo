import React from 'react';
import Radio from './components/Radio';

const App = () => {

    const [ value, setValue ] = React.useState();

    return (
        <form>
            <Radio 
                options={['Azul', 'Vermelho']} 
                value={value} 
                setValue={setValue} 
            />
            <button>Enviar</button>
        </form>
    );
}

export default App;
