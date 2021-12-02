import Produtos from "./components/Pages/Produtos";
import Home from "./components/Pages/Home";
// Replique a interface como a apresentada na aula
// Utilize a array abaixo para mostrar os produtos
// Quebre em componentes o que precisar ser reutilizado
// Dica: const { pathname } = window.location; (puxa o caminho do URL)
const produtos = [
    { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
    { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
];


const App = () => {

    let Pagina = Home;
    const { pathname } = window.location
    Pagina = pathname === '/produtos' ? Produtos : Home;

    return (
        <div>
            { pathname === '/home' && <Pagina /> }
            { pathname === '/produtos' && <Pagina>
                <div>{ produtos.map( i => <>
                        <h3>{i.nome}</h3>
                        <ul>
                            {i.propriedades.map( i => <li key={i + Date.now()}>{i}</li>)}
                        </ul>
                    </>
                 ) }
                </div>
            </Pagina> }
        </div>
    );
}

export default App;
