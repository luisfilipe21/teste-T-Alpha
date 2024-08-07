import { Navigate, Outlet } from "react-router-dom"
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

export const PrivateRoutes = () => {
    const { user } = useContext(UserContext);

    return user ? <Outlet /> : <Navigate to="/" />;
}