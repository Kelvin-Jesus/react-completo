import React, { useState } from 'react';
import ButtonModal from './components/ButtonModal';
import Modal from './components/Modal';

const App = () => {

    // let ativo = true
    // const [ state, setState ] = useState(true);
    // const [ userData, setUserData ] = useState({ name: 'Kelvin', age: '20'});

    // const handleClick = () => {
    //     console.log('clicou')
    //     setState( !state )
    //     setUserData({ ...userData, college: 'Contabilidade' })
    // }

    const [ modal, setModal ] = useState(false)
    let [ items, setItems ] = useState('teste')

    const [ theme, setTheme ] = useState( () => window.localStorage.getItem('currentTheme'))

    const handleClick = () => {
        setItems('outros')
    }

    return (
        <div>
            {/* <p>{userData.name}</p>
            <p>{userData.age}</p>
            <p>{userData.college}</p>
            <button onClick={handleClick} disabled={!state??false}>{ state ? 'Habilitado' : 'Desabilitado' }</button> */}
            {items}
            <button onClick={handleClick}>Aqui</button>
            <Modal modal={modal} setModal={setModal}/>
            <ButtonModal setModal={setModal}></ButtonModal>

        </div>
    );
}

export default App;
