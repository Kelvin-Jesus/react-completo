import { useRef, useEffect, useState } from 'react';

const App = () => {

    const [ comments, setComments ] = useState([]);
    const [ input, setInput ] = useState('');

    const newCommentInput = useRef();

    const handleClick = () => {
        setComments([...comments, input])
        newCommentInput.current.focus()
    }
    
    return (
        <div>
            <ul>
                {comments.map(comment => 
                    <li key={Date.now() + Math.random()} >{comment}</li>)
                }
            </ul>
            <input 
                type="text" 
                ref={newCommentInput}
                value={input} 
                onChange={({target}) => setInput(target.value)}
            />
            <br></br>
            <button onClick={handleClick}>Send</button>
        </div>
    );
}

export default App;
