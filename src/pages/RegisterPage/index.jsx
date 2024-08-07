import { useNavigate } from "react-router-dom";
import { RegisterForm } from "../../form/RegisterForm"

export const RegisterPage = () => {
    const navigate = useNavigate();

    return (
        <section>
            <p onClick={() => navigate("/")}>página de login</p>
            <RegisterForm />
        </section>
    )
}