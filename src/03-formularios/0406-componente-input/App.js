import React from 'react';
import Input from './components/Input';

const App = () => {

    const [ nome, setNome ] = React.useState()
    const [ email, setEmail ] = React.useState()

    return (
        <form>
            <Input label="Nome" value={nome} setValue={setNome} />
            <Input 
                label="Email" 
                value={email} 
                setValue={setEmail} 
                required 
            />
            <button>Enviar</button>
        </form>
    );
}

export default App;
