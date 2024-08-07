import { Navigate, Outlet } from "react-router-dom"
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

export const PublicRoutes = () => {
    
    const { user } = useContext(UserContext);

    return user ? <Navigate to="/" /> : <Outlet />;
}