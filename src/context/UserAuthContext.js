import { createContext, useState } from "react";

export const UserAuthContext = createContext();

export const UserAuthProvider = ({children}) => {
    //toda nuestra logica

    const [isLogged, setIsLogged] = useState(false);

    return (
        <UserAuthContext.Provider value={{
            isLogged,
            setIsLogged
        }}>
            {children}
        </UserAuthContext.Provider>
    )
}