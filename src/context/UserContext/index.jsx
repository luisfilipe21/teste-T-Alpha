import { createContext, useEffect, useState } from "react"
import { api } from "../../service";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState(false);


    return (
        <UserContext.Provider value={({ user, setUser })}>
            {children}
        </UserContext.Provider>
    )
}