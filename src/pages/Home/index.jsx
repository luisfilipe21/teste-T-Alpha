import { useContext } from "react"
import { ProductsContext } from "../../context/ProductsContext"
import { CreateProductForm } from "../../form/CreateProductForm";
import { ProductList } from "./ProductList";
import { EditModal } from "../../components/EditModal";

export const Home = () => {

    const { products, editModal } = useContext(ProductsContext);

    console.log(products)

    return (
        <>

            <section>
                <div>
                    <CreateProductForm />
                </div>


                {products ? products.data.products.map(product => {
                    return (
                        <ProductList

                            key={product.id}
                            product={product} />
                    )
                }): null}

            </section>

            {editModal ? <EditModal /> : null}
        </>
    )
}