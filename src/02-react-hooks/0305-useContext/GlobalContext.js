import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalStorage = ({ children }) => {
    const [ count, setCount ] = useState(0);
    return <GlobalContext.Provider 
            value={
                { name: 'kj', theme: 'dark', count, setCount }
            }>
                {children}
            </GlobalContext.Provider>
}