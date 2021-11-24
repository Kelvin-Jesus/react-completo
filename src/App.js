import React, { useState } from 'react';
import './App.css';

// Com os hooks nós conseguimos com facilidade sincronizar o estado(valor atual de uma var por exemplo)

const Hooks = () => {
    
  const [ count, setCount ] = useState(0);

  const handleClick = () => {
    setCount(count + 1)
  }

  return (
      <div>
          {count}
          <button onClick={handleClick} >Incrementar</button>
      </div>
  )

}

export default Hooks;