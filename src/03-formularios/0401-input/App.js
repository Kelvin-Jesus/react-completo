import React from 'react';

const App = () => {

    const [ form, setForm ] = React.useState({
        nome: '',
        email: ''
    })

    const handleSubmit = React.useCallback((e) => {
        console.log(e)
        e.preventDefault()

    }, [])

    const handleChange = React.useCallback(({ target }) => {
        
        const { id, value } = target
        console.log(id, value)
        setForm({
            ...form, 
            [id] : value
        })

    }, [])

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor='nome'>Nome</label>
                <input 
                    type="text" 
                    id='nome' 
                    name='nome'
                    value={form.nome} 
                    onChange={handleChange} 
                />
                <p>{form.nome}</p>
                <label htmlFor='email'>Email</label>
                <input 
                    type="text" 
                    id='email' 
                    name='email'
                    value={form.email} 
                    onChange={handleChange} 
                />
                <p>{form.email}</p>
                <button type='submit'>Enviar</button>
            </form>
        </>
    );
}

export default App;
