import { useContext } from "react";
import { Inputs } from "../../components/Input"
import { ProductsContext } from "../../context/ProductsContext";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormCreateProductSchema } from "../../schema/FormCreateProductSchema";

export const FormEditProduct = () => {

    const {products, editProduct, updateProduct } = useContext(ProductsContext);
    const { register, handleSubmit, formState: { errors } } = useForm({
        values:{
            name: editProduct.name,
            description: editProduct.description,
            price: editProduct.price,
            stock: editProduct.stock
        }
    })

    const submit = async (payload) => {
        // console.log(products.data.products[0].id)
        await updateProduct(payload)
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <Inputs
                {...register("name")}
                placeholder={editProduct.name}
                type="string"
                label={editProduct.name}
            />

            <Inputs
                {...register("description")}
                placeholder={editProduct.description}
                type="string"
                label={editProduct.description}
            />

            <Inputs
                {...register("price")}
                placeholder={editProduct.price}
                type="number"
                label={editProduct.price}
            />

            <Inputs
                {...register("stock")}
                placeholder={editProduct.stock}
                type="number"
                label={editProduct.stock}
            />
            <button type="submit">Editar Produto</button>
        </form>
    )
}