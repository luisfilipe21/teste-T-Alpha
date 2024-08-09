import { useNavigate } from "react-router-dom";
import { RegisterForm } from "../../form/RegisterForm"

export const RegisterPage = () => {
    const navigate = useNavigate();

    return (
        <main>
            <p onClick={() => navigate("/")}>página de login</p>
            <RegisterForm />
        </main>
    )
}