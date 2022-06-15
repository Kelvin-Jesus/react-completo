import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Sobre from './Pages/Sobre';
import Produto from './Pages/Produto';
import ProdutoAvalicao from './Pages/ProdutoAvaliacao';
import ProdutoCustomizado from './Pages/ProdutoCustomizado';
import ProdutoDescricao from './Pages/ProdutoDescricao';

const App = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='sobre' element={<Sobre />}/>
                <Route path='login' element={<Login />}/>
                <Route path='produto/:id' element={<Produto />} >

                    <Route path='' element={<ProdutoDescricao />}></Route>
                    <Route path='avaliacao' element={<ProdutoAvalicao />}></Route>
                    <Route path='customizado' element={<ProdutoCustomizado />}></Route>

                </Route>
                <Route path="*" element={<p>Nada encontrado</p>}></Route>
            </Routes>
        </BrowserRouter>
    );

}

export default App;