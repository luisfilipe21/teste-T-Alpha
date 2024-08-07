import { useForm } from "react-hook-form";
import { Inputs } from "../../components/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormLoginSchema } from "../../schema/FormLoginSchema";
import { api } from "../../service";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

export const LoginForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(FormLoginSchema)
    });

    const { user, setUser } = useContext(UserContext);

    const navigate = useNavigate();


    const submit = async (payload) => {
        try {
            const { data, success } = await api.post("/api/auth/login", payload);
            localStorage.setItem("@TOKEN", data.data.token);
            console.log(data.success);
            setUser(data.success);
            navigate("/home");
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <Inputs {...register("taxNumber")}
                placeholder="CPF"
                type="string"
                label="CPF ou CNPJ"
                errors={errors.cpf}
            />
            <Inputs {...register("password")}
                placeholder="Senha"
                type="password"
                label="Senha"
                errors={errors.password}
            />
            <button type="submit">Register</button>
        </form>
    )
}