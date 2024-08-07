import { createContext, useEffect, useState } from "react"
import { api } from "../../service";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState(false);
    const navigate = useNavigate();

    const registerUser = async (payload) => {
        try {
            const { data } = await api.post("/api/auth/register", payload);
            if (data) {
                navigate("/")
            }
        } catch (error) {
            console.error(error.message)
        }

    }
    return (
        <UserContext.Provider value={({ user, setUser, registerUser })}>
            {children}
        </UserContext.Provider>
    )
}