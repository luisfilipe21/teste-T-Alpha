import { useForm } from "react-hook-form";
import { Inputs } from "../../components/Input";
import { zodResolver } from "@hookform/resolvers/zod";

export const LoginForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver()
    });

    const submit = (payload) => {
        console.log(payload)
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <Inputs {...register("cpf")}
            placeholder="CPF"
            type="text"
            label="CPF"
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