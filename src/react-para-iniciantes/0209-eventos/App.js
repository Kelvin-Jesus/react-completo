import React from 'react';

const App = () => {

    const handleClick = e => {
        console.log(e)
    }

    const handle = e => {
        console.log(e)
    }

    const handleScroll = e => {
        console.log(e)
    }

    window.addEventListener('scroll', handleScroll)

    return (
        <>
            <div style={{height: '200vh'}}></div>
            <button onClick={handleClick} onDragStart={handle} onDragEnd={handle} draggable>Clique</button>
        </>
    )

}

export default App;