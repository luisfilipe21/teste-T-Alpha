import { useContext } from "react"
import { ProductsContext } from "../../context/ProductsContext"
import { CreateProductForm } from "../../form/CreateProductForm";
import { ProductList } from "./ProductList";
import { EditModal } from "../../components/EditModal";

export const Home = () => {

    const { products, editModal } = useContext(ProductsContext);

    console.log(products.products)

    return (
        <>

            <section>
                <div>
                    <CreateProductForm />
                </div>

                <ul>


                    {products ? products.products.map(product => {
                        return (
                            <ProductList
                                key={product.id}
                                product={product} />
                        )
                    }) : null}
                </ul>
            </section>

            {editModal ? <EditModal /> : null}
        </>
    )
}