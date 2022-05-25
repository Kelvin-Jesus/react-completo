import { useRef, useEffect, useState } from 'react';

const App = () => {

    const [ cart, setCart ] = useState(0);
    const [ notification, setNotification ] = useState(null);
    
    const timeoutRef = useRef()
    
    function handleAddCartBtn() {
        setCart(cart+1)
        setNotification('Item added to Cart');

        clearTimeout(timeoutRef.current)
        timeoutRef.current = setTimeout(() => {
            setNotification(null)
        }, 2000)
    }

    return (
        <div>
            <p>{notification}</p>
            <button onClick={handleAddCartBtn}>Add to Cart</button>
            <p>Items on Cart: {cart}</p>
        </div>

    );
}

export default App;
