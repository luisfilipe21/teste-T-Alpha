import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../pages/LoginPage"
import { RegisterPage } from "../pages/RegisterPage"
import { Home } from "../pages/Home"
import { PublicRoutes } from "./PublicRoutes"
import { PrivateRoutes } from "./PrivateRoutes"

export const RoutesMain = () => {
    return (
        <Routes>
            <Route element={<PublicRoutes/>}>
                <Route path="/" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
            </Route>
            <Route element={<PrivateRoutes/>}>
                <Route path="/home" element={<Home />} />
            </Route>
        </Routes>
    )
}