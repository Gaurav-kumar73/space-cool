import { createContext, useContext, useEffect, useState } from 'react';

const DataContext = createContext();

export default function DataProvider({ children }) {
    const [auth, setAuth] = useState(false)

    useEffect(()=>{
        setAuth(auth)

    },[auth])

    console.log(auth)
    return (
        <DataContext.Provider value={{auth,setAuth}}>
            {children}
        </DataContext.Provider>
    )
}

export const useAuth =()=> useContext(DataContext);

