import React from 'react';

const App = () => {

    const [ select, setSelect ] = React.useState('')
    const [ radio, setRadio ] = React.useState()
    const [ termos, setTermos ] = React.useState()
    const [ cores, setCores ] = React.useState([])

    const handleCheckbox = ({ target }) => {

        if ( !target.checked ) {
            setCores(cores.filter( cor => cor !== target.value ));
            return;
        }
        
        setCores([ ...cores, target.value ]);
        
    }

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

    const checkColor = (cor) => cores.includes(cor)


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
                <label className='a'>
                    <input 
                        type="checkbox" 
                        value="termos"
                        checked={termos}
                        onChange={({ target }) => setTermos(target.checked)}
                    />
                    Aceito os termos
                </label>
                <label className='a'>
                    <input 
                        type="checkbox" 
                        value="azul"
                        checked={checkColor('azul')}
                        onChange={handleCheckbox}
                    />
                    Azul
                </label>
                <label className='a'>
                    <input 
                        type="checkbox" 
                        value="vermelho"
                        checked={checkColor('vermelho')}
                        onChange={handleCheckbox}
                    />
                    Vermelho
                </label>
            </form>
        </>
    );
}

export default App;
