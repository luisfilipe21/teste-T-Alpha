import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Inputs } from "../../components/Input";
import { FormCreateProductSchema } from "../../schema/FormCreateProductSchema";

export const CreateProductForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(FormCreateProductSchema)
    });

    const submit = (payload) => {
        console.log(payload)
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <Inputs
                {...register("name")}
                placeholder="Nome do produto"
                type="string"
                label="Nome do produto"
                errors={errors.name}
            />

            <Inputs
                {...register("description")}
                placeholder="Descrição do produto"
                type="string"
                label="Descrição do produto"
                errors={errors.description}
            />
            <Inputs
                {...register("price")}
                placeholder="Preço do produto"
                type="number"
                label="Preço do produto"
                errors={errors.price}
            />
            <Inputs
                {...register("stock")}
                placeholder="Quantidade em estoque"
                type="number"
                errors={errors.stock}
                label="Quantidade em estoque"
            />

            <button type="submit">Cadastrar novo produto</button>
        </form>
    )
}