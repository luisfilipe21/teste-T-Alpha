import { useNavigate } from "react-router-dom"
import { LoginForm } from "../../form/LoginForm"

export const LoginPage = () => {
    const navigate = useNavigate();

    
    return (
        <main>
            <p onClick={() => navigate("/register")}>Cadastro de usuário</p>
            <LoginForm />
        </main>
    )
}