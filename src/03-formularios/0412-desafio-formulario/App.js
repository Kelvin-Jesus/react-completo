import React from 'react';
import Radio from './components/Radio';

const perguntas = [
    {
      pergunta: 'Qual método é utilizado para criar componentes?',
      options: [
        'React.makeComponent()',
        'React.createComponent()',
        'React.createElement()',
      ],
      resposta: 'React.createElement()',
      id: 'p1',
    },
    {
      pergunta: 'Como importamos um componente externo?',
      options: [
        'import Component from "./Component"',
        'require("./Component")',
        'import "./Component"',
      ],
      resposta: 'import Component from "./Component"',
      id: 'p2',
    },
    {
      pergunta: 'Qual hook não é nativo?',
      options: ['useEffect()', 'useFetch()', 'useCallback()'],
      resposta: 'useFetch()',
      id: 'p3',
    },
    {
      pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
      options: ['set', 'get', 'use'],
      resposta: 'use',
      id: 'p4',
    },
];
  

const App = () => {

    const [ slide, setSlide ] = React.useState(0)
    const [ acertos, setAcertos ] = React.useState(null)
    const [ respostas, setRepostas ] = React.useState({
        p1: '',
        p2: '',
        p3: '',
        p4: '',
    })

    const showFinalResult = () => {

        const rightAnswers = perguntas.filter(pergunta => respostas[pergunta.id] === pergunta.resposta)
        setAcertos(`Você acertou: ${rightAnswers.length} de ${perguntas.length} questões`)

    }

    const handleRadioChange = ({ target }) => {
        setRepostas({
            ...respostas,
            [target.id]: target.value
        })
    }

    const handleClick = () => {
        if ( slide >= perguntas.length - 1 ) {
            setSlide(currentSlide => currentSlide+1)
            showFinalResult()
            return;

        }
        return setSlide(currentSlide => currentSlide+1)
    }

    return (
        <>
        <form onSubmit={e=>e.preventDefault()}>
            { perguntas && 
                perguntas.map( (pergunta, index, array) => {
                    return (
                        <div key={pergunta.id} className={index === slide ? 'show' : 'hide'}>
                            <h1>{pergunta.pergunta}</h1>
                            <div>{
                                <Radio 
                                    value={respostas[pergunta.id]} 
                                    options={pergunta.options}
                                    id={pergunta.id}
                                    active={index === slide}
                                    onChange={handleRadioChange}
                                />
                            }</div>
                            <button 
                                onClick={handleClick}
                                type={array.length === index + 1 ? 'submit' : 'button'}
                            >Próxima</button>
                        </div>
                    )
                }) 
            }
        </form>
        {acertos && <p>{acertos}</p>}
        </>
    );
}

export default App;
