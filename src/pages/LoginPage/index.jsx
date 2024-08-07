import { useNavigate } from "react-router-dom"
import { LoginForm } from "../../form/LoginForm"

export const LoginPage = () => {
    const navigate = useNavigate();

    
    return (
        <section>
            <p onClick={() => navigate("/register")}>Cadastro de usuário</p>
            <LoginForm />
        </section>
    )
}