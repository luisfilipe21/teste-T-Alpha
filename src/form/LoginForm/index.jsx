import { useForm } from "react-hook-form";
import { Inputs } from "../../components/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormLoginSchema } from "../../schema/FormLoginSchema";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

export const LoginForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(FormLoginSchema)
    });

    const { userLogin } = useContext(UserContext);

    const submit = (payload) => {
        userLogin(payload);
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
            <button type="submit">Login</button>
        </form>
    )
}