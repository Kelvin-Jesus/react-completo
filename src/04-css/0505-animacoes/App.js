import React from 'react';
import Produto from './components/Produto';
import Slide from './components/Slide';
import './components/app.css';

const App = () => {

    const slides = [
        {
            id: 'slide1',
            text: 'Slide 1'
        },
        {
            id: 'slide2',
            text: 'Slide 2'
        },
        {
            id: 'slide3',
            text: 'Slide 3'
        }
    ];

    // const [ active, setActive ] = React.useState();

    return (
        <div>
            {/* <button onClick={() => setActive(!active)}>Ativar</button>
            {active && <Produto />} */}
            <Slide slides={slides} />
        </div>
    );
}

export default App;
