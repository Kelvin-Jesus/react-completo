import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Sobre from './Pages/Sobre';
import Produto from './Pages/Produto';
import Header from './components/Header';

const App = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='sobre' element={<Sobre />}/>
                <Route path='login' element={<Login />}/>
                <Route path='produto/:id' element={<Produto />}/>
                <Route path="*" element={<p>Nada encontrado</p>}></Route>
            </Routes>
        </BrowserRouter>
    );

}

export default App;