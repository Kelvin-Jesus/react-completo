import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        console.log('fez Login');
        navigate('/sobre');
    }

    return <button onClick={handleClick}>Login</button>
};

export default Login;