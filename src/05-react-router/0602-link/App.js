import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Sobre from './Pages/Sobre';

const App = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='sobre' element={<Sobre />}/>
                <Route path='login' element={<Login />}/>
                <Route path="*" element={<p>Nada encontrado</p>}></Route>
            </Routes>
        </BrowserRouter>
    );

}

export default App;