import React from 'react';

const MotionComp = React.lazy(() => import('./MotionComp') )
console.log(MotionComp)

const App = () => {

    const [ativo, setAtivo] = React.useState(false);
    return (
    <>
        { ativo && 
            <React.Suspense fallback="carregando...">
                <MotionComp />
            </React.Suspense> }
        <button onClick={()=>setAtivo(!ativo)}>Ativar</button>
    </>
    );
}

export default App;
