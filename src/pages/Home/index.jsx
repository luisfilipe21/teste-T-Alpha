import { useContext } from "react"
import { ProductsContext } from "../../context/ProductsContext"
import { CreateProductForm } from "../../form/CreateProductForm";
import { EditModal } from "../../components/EditModal";
import { ProductList } from "../../components/ProductList";

export const Home = () => {

    const { products, editModal } = useContext(ProductsContext);

    console.log(products.products)

    return (
        <>
            <main>
                <div>
                    <CreateProductForm />
                </div>

                <ul>
                    {products && products.products.map(product => {
                        return (
                            <ProductList
                                key={product.id}
                                product={product} />
                        )
                    })}
                </ul>
            </main>

            {editModal ? <EditModal /> : null}
        </>
    )
}