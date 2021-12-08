import React from 'react';

const ButtonModal = ({ setModal }) => {

    const handleClick = currentValue => {
        setModal(currentValue => !currentValue)
    }

    return <button onClick={handleClick}>Abrir</button>;
    // return <button onClick={() => setModal(true)}>Abrir</button>;
}

export default ButtonModal;
