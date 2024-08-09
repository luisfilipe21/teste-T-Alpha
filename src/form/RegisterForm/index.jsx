import { useForm } from "react-hook-form";
import { Inputs } from "../../components/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormRegisterSchema } from "../../schema/FormRegisterSchema";
import { api } from "../../service";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";


export const RegisterForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(FormRegisterSchema)
    });
    const { registerUser } = useContext(UserContext);


    const submit = (payload) => {
        registerUser(payload)
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <Inputs {...register("name")}
                placeholder="Nome"
                label="Nome"
                type="string"
                errors={errors.name}
            />

            <Inputs {...register("taxNumber")}
                placeholder="CPF"
                label="CPF"
                type="string"
                errors={errors.cpf}
            />

            <Inputs {...register("mail")}
                placeholder="E-mail"
                label="E-mail"
                type="email"
                errors={errors.mail}
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
            <button type="submit">Cadastrar novo usuário</button>
        </form>
    )
}