import React from 'react';
import Input from './../0406-componente-input/components/Input'
import useForm from './hooks/useForm';

const App = () => {
    
    const cep = useForm('cep');
    const email = useForm('email');
    const nome = useForm();
    
    const regex = /^\d{5}-?\d{3}$/

    const handleSubmit = (event) => {
        event.preventDefault()
        if ( cep.validate() && email.validate() ) {
            console.log('sended')
        } else {
            console.log('not sended')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <Input
                label="Nome"
                id="nome"
                type="text"
                {...nome}
            />
            <Input
                label="CEP"
                id="cep"
                type="text"
                placeholder="0000-000"
                {...cep}
            />
            <Input
                label="Email"
                id="email"
                type="email"
                {...email}
            />
            <button>Enviar</button>
        </form>
    );
}

export default App;
