import { useContext } from "react"
import { ProductsContext } from "../../context/ProductsContext"
import { CreateProductForm } from "../../form/CreateProductForm";
import { ProductList } from "./ProductList";

export const Home = () => {

    const { products } = useContext(ProductsContext);

    console.log(products.data.products)


    return (
        <section>
            <div>
                <CreateProductForm />
            </div>
            espacinho aqui


            {products.data.products && products.data.products.map(product => {
                return (
                    <ProductList 
                    key={product.id} 
                    product={product} />
                )
            })}

        </section>
    )
}