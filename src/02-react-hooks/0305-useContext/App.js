import React from 'react';
import UserContext from './UserContext';
import Produto from './Produto';
import { GlobalStorage } from './GlobalContext';

const App = () => {

    console.log(UserContext);
    return (
        <GlobalStorage>
            <Produto />
        </GlobalStorage>
    );
}

export default App;
