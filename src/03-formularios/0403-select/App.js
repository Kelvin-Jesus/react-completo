import React from 'react';

const App = () => {

    const [ select, setSelect ] = React.useState('')

    const handleSubmit = React.useCallback((e) => {
        console.log(e)
        e.preventDefault()

    }, [])

    return (
        <>
            <form onSubmit={handleSubmit}>
                <select value={select} onChange={({target}) => setSelect(target.value)}>
                    <option disabled value="">Selecione um produto</option>
                    <option value="notebook">Notebook</option>
                    <option value="smartphone">Smartphone</option>
                    <option value="tablet">Tablet</option>
                </select>
                {select}
            </form>
        </>
    );
}

export default App;
