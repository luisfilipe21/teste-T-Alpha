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

    const userLogin = async (payload) => {
        try {
            const { data } = await api.post("/api/auth/login", payload);
            localStorage.setItem("@TOKEN", data.data.token);

            setUser(data.success);
            navigate("/home");
        } catch (error) {
            console.log(error.message);
        }
    }

    const autoLogin = async () => {
        const token = localStorage.getItem("@TOKEN")

        if (token) {
            try {
                const {data} = await api.post("/api/auth/login", {
                    headers: { Authorization: `Bearer ${token}` }
                })
                if(data.success) {
                    setUser(data.success);
                    navigate("/home");
                }else{
                    localStorage.removeItem("@TOKEN")
                }

            } catch (error) {
                console.error("Auto-login failed:", error.message)
                localStorage.removeItem("@TOKEN")
            }
        }
    }
    useEffect(() => {
        autoLogin();
    }, []);


    return (
        <UserContext.Provider value={({ user, setUser, registerUser, userLogin })}>
            {children}
        </UserContext.Provider>
    )
}