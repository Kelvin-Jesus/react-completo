const Produtos = () => {
    const handleClick = e => {
        console.log(e.target.innerText)
    }

    return <button onClick={handleClick}>Comprar</button>

}

const App = () => {
    return (
        <div>
            Meu App
            <Produtos />
        </div>
    )
}

export default App; 