import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Produtos from './Pages/Produtos';
import Contato from './Pages/Contato';
import Produto from './components/Produto';

const App = () => {
    return (
        <section className="app">
            <BrowserRouter>
                <Routes>
                    <Route path="" element={<Produtos />} />
                    <Route path="contato" element={<Contato />} />
                    <Route path="produto/:id" element={<Produto />} />
                    <Route path="*" element={<p>Rota não encontrada</p>}/>
                </Routes>
            </BrowserRouter>
        </section>
    );
}

export default App;
