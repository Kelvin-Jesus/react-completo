import React from 'react';
import Input from './../0406-componente-input/components/Input';

const App = () => {
    
    const [ cep, setCep ] = React.useState('');
    const [ error, setError ] = React.useState(null);
    
    const regex = /^\d{5}-?\d{3}$/

    const validateCep = (value) => {
        if ( value.length === 0 ) {
            setError('Preencha um valor');
            return false;
        } 
        
        if ( !regex.test(value) ) {
            setError('Preencha um CEP válido');
            return false;
        }

        setError(null);
        return true;
    }

    const handleBlur = ({ target }) => {
        validateCep(target.value)
    }

    const handleChange = ({ target }) => {
        if (error) validateCep(target.value)
        setCep(target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if ( validateCep(cep) ) {
            console.log('sended')
        } else {
            console.log('not sended')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <Input
                label="CEP"
                id="cep"
                type="text"
                placeholder="0000-000"
                value={cep}
                onChange={handleChange}
                onBlur={handleBlur}
                setValue={setCep}
            />
                {error && <p>{error}</p>}
            <p>{cep}</p>
            <button>Enviar</button>
        </form>
    );
}

export default App;
