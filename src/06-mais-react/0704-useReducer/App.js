import React from 'react';

function reducer(state, action) {

    switch ( action ) {

        case 'aumentar':
            return state + 1;
        case 'diminuir':
            return state - 1;
        default:
            return new Error('Action not found');

    }

}

const App = () => {

    const [state, dispatch] = React.useReducer(reducer, 0);

    return (
    <>
        <button onClick={() => dispatch('aumentar')}>Aumentar</button>
        <button onClick={() => dispatch('diminuir')}>Diminuir</button>
        <button onClick={() => dispatch('sdf')}>Sla</button>
        <p>{state}</p>
    </>
    );
}

export default App;
