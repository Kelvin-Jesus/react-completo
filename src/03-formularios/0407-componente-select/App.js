import React from 'react';
import Select from './components/Select';

const App = () => {

    const [ value, setValue ] = React.useState();

    return (
        <form>
            <Select value={value} setValue={setValue} >
                <option disabled value="">Selecione um produto</option>
                <option value="notebook">Notebook</option>
                <option value="smartphone">Smartphone</option>
            </Select>
            
            <button>Enviar</button>
        </form>
    );
}

export default App;
