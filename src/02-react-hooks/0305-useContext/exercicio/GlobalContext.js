import { createContext, useState, useEffect } from "react";

export const GlobalContext = createContext(); 

export const GlobalStorage = ({ children }) => {

    const [ data, setData ] = useState(null);

    useEffect(async ()=> {
        const req = await fetch('https://ranekapi.origamid.dev/json/api/produto/');
        const resp = await req.json()
        setData(await resp);
    }, [])

    const clearData = () => {
        setData(null)
    }

    return <GlobalContext.Provider value={{ data, setData, clearData }}>
        {children}
    </GlobalContext.Provider>
}