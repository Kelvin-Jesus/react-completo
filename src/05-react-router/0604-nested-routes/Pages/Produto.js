import React from 'react';
import { useParams, Routes, Route, NavLink, Outlet } from 'react-router-dom';


const Produto = () => {

    return (
        <section>
            <h1>Produto: {useParams.id}</h1>
            <nav>
                <NavLink to="">Descrição</NavLink>
                <NavLink to="avaliacao">Avaliação</NavLink>
                <NavLink to="customizado">Customizado</NavLink>
            </nav>
            <Outlet />
        </section>
    );
}

export default Produto;