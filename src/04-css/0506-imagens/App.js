import React from 'react';
import foto from './img/foto.jpg';
import dog from './img/dog.svg';
import { ReactComponent as Dog } from './img/dog.svg';
import DogSVG from './components/DogsSVG';

const App = () => {

    return (
        <div>
            <p cla></p>
            <img src={foto} alt="Cachorro" />
            <img src={dog} />
            <Dog />
            <DogSVG color={'#84e'} />
        </div>
    );
}

export default App;
