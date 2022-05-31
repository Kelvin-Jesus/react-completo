import React from 'react';

const App = () => {

    const [ textarea, setTextarea ] = React.useState()

    const handleSubmit = React.useCallback((e) => {
        console.log(e)
        e.preventDefault()

    }, [])

    return (
        <>
            <form onSubmit={handleSubmit}>
                <textarea value={textarea} onChange={({target}) => setTextarea(target.value)} />
                <button type='submit'>Enviar</button>
            </form>
        </>
    );
}

export default App;
