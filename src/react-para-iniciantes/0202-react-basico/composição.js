// Componente são muito úteis quando trabalhados com composição(um componente compõe(ajuda a formar) o outro)

const Button = () => {
    return <button>Comprar</button>
}

const Titulo = () => {
    const numero = Math.random() * 1000
    return <h1>Meu Titulo {numero}</h1>
}

const App = () => {
    return (
        <div>
            <Titulo />
            Meu App
            <Button />
            <Titulo />
        </div>
    )
}

export default App; 