// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem
const luana = {
    cliente: 'Luana',
    idade: 27,
    compras: [
        { nome: 'Notebook', preco: 'R$ 2500' },
        { nome: 'Geladeira', preco: 'R$ 3000' },
        { nome: 'Smartphone', preco: 'R$ 1500' },
    ],
    ativa: true,
};
  
const mario = {
    cliente: 'Mario',
    idade: 31,
    compras: [
        { nome: 'Notebook', preco: 'R$ 2500' },
        { nome: 'Geladeira', preco: 'R$ 3000' },
        { nome: 'Smartphone', preco: 'R$ 1500' },
        { nome: 'Guitarra', preco: 'R$ 3500' },
    ],
    ativa: false,
};
  
const App = () => {

    const dados = luana;
    const justTheNumber = dados.compras.map( i => Number(i.preco.replace('R$ ', '')) )
    const total = justTheNumber.reduce( (prev, acc) => prev + acc)
    // console.log(total)

    return <>
        <p>Nome: {dados.nome}</p>
        <p>Idade: {dados.idade}</p>
        <p>Situação: <span style={{color: dados.ativa ? 'green' : 'red' }}>{dados.ativa ? 'Ativo' : 'inativo'}</span></p>
        <p>Total gasto: R$ {total}</p>
    </>;
};

export default App;