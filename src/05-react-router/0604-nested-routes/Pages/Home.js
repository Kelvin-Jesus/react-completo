import React from "react";
import { NavLink, Link } from "react-router-dom";
import Header from "../components/Header";
import Produto from "./Produto";

const Home = () => {
    return (
        <section>
            
            <NavLink to="produto/notebook">Notebook</NavLink>
            <Link to="produto/smartphone">Smartphone</Link>
           <Produto />
        </section>
    );
}

export default Home;