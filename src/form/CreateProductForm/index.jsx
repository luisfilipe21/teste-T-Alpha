import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Inputs } from "../../components/Input";
import { FormCreateProductSchema } from "../../schema/FormCreateProductSchema";
import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";

export const CreateProductForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(FormCreateProductSchema)
    });

    const { createProduct } = useContext(ProductsContext)

    const submit = (payload) => {
        createProduct(payload);
        reset();
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <Inputs
                {...register("name")}
                label="Nome do produto"
                placeholder="Nome do produto"
                type="string"
                errors={errors.name}
            />

            <Inputs
                {...register("description")}
                label="Descrição do produto"
                placeholder="Descrição do produto"
                type="string"
                errors={errors.description}
            />

            <Inputs
                {...register("price")}
                label="Preço do produto"
                placeholder="Preço do produto"
                type="number"
                errors={errors.price}
            />

            <Inputs
                {...register("stock")}
                label="Quantidade em estoque"
                placeholder="Quantidade em estoque"
                type="number"
                errors={errors.stock}
            />

            <button type="submit">Cadastrar novo produto</button>
        </form>
    )
}