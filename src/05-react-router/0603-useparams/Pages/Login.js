import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

const Login = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        console.log('fez Login');
        navigate('/sobre');
    }

    return (
        <>
            <Header />
            <button onClick={handleClick}>Login</button>
        </>
    )
};

export default Login;