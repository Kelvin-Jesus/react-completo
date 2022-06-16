import React from "react";
import { NavLink, Link } from "react-router-dom";
import Head from "../components/Head";
import Header from "../components/Header";
import Produto from "./Produto";

const Home = () => {
    return (
        <section>
            <Head title="Home" description="Descrição da página Home"/>
            <ul style={{display: 'flex', gap: '1rem'}}>
                <NavLink to="produto/notebook">Notebook</NavLink>
                <Link to="produto/smartphone">Smartphone</Link>
                <Link to="sobre">Sobre</Link>
            </ul>
           <Produto />
        </section>
    );
}

export default Home;