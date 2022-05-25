import { useContext } from 'react';
import { GlobalContext } from './GlobalContext';

const ClearData = () => {

    const globalData = useContext(GlobalContext)
    
    return (
        <button onClick={globalData.clearData}>Clear Data</button>
    );
}

export default ClearData;
