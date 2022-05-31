import React from 'react';

const App = () => {

    const [ select, setSelect ] = React.useState('')
    const [ radio, setRadio ] = React.useState()
    const [ produto, setProduto ] = React.useState()

    const handleSubmit = React.useCallback((e) => {
        console.log(e)
        e.preventDefault()

    }, [])

    const handleChange = React.useCallback((e) => {
        console.log(e.target.value)
        e.preventDefault()
        setProduto(e.target.value)

    }, [])


    return (
        <>
            <form onSubmit={handleSubmit}>
                {select}
                <select value={select} onChange={({target}) => setSelect(target.value)}>
                    <option disabled value="">Selecione um produto</option>
                    <option value="notebook">Notebook</option>
                    <option value="smartphone">Smartphone</option>
                    <option value="tablet">Tablet</option>
                </select>
                <p>radio: {produto}</p>
                <label className='a'>
                    <input 
                        type="radio" 
                        value="notebook" 
                        name='produto' 
                        checked={radio === 'notebook'} 
                        onChange={handleChange}
                    />
                    notebook
                </label>
                <label className='a'>
                    <input 
                        type="radio" 
                        value="smartphone" 
                        name='produto' 
                        checked={radio === 'smartphone'} 
                        onChange={handleChange}
                    />
                    smartphone
                </label>
                
            </form>
        </>
    );
}

export default App;
