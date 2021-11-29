import React from 'react';
import Form from './components/Form';

// const Titulo = ({ cor, texto, children }) => {
//     return <h1 style={{ color: cor }}>{texto} {children}</h1>
// }

// const Input = ({ id, label, ...props }) => {
//     return (
//         <div>
//             <label htmlFor={id}>{label}</label>
//             <input id={id} type="text" {...props} />
//         </div>
//     )
// }

const App = () => {
    return (
        <div>
            {/* <Titulo cor="red" texto="Este é o título do componente" />
            <Titulo>
                <p>Conteúdo do titulo</p>
                <p>Conteúdo do titulo</p>
            </Titulo> */}

            {/* <Input id="1" required title="input" data-id="2" /> */}
            <Form></Form>
        </div>
    );
}

export default App;
