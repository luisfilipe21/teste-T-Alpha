import { useForm } from "react-hook-form";
import { Inputs } from "../../components/Input";
import { zodResolver } from "@hookform/resolvers/zod";

export const RegisterForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver()
    });

    const submit = (payload) => {
        console.log(payload)
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <Inputs {...register("name")}
                placeholder="Nome"
                label="Nome"
                type="text"
                errors={errors.name}
            />

            <Inputs {...register("cpf")}
                placeholder="CPF"
                label="CPF"
                type="cpf"
                errors={errors.cpf}
            />

            <Inputs {...register("email")}
                placeholder="E-mail"
                label="E-mail"
                type="email"
                errors={errors.email}
            />

            <Inputs {...register("phone")}
                placeholder="Telefone"
                label="Telefone"
                type="number"
                errors={errors.phone}
            />

            <Inputs {...register("password")}
                placeholder="Senha"
                label="Password"
                type="password"
                errors={errors.password}
            />
            <button type="submit">Register</button>
        </form>
    )
}