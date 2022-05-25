import { useState, useCallback, useMemo } from 'react';

function badOperation() {
    let c;
    for(let i = 0; i < 100000000; i++)
        c = i + i /  100
    return c;
}

const App = () => {

    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {
        setCount(count => count+1);
    }, [])

    let t0 = performance.now();
    const value = useMemo(() => badOperation(), []);
    console.log(value);
    let t1 = performance.now() - t0;
    console.log(t1)

    return (
        <div>
            <button onClick={handleClick}>{count}</button>
        </div>
    );
}

export default App;
