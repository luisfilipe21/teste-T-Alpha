import { useContext } from "react"
import { ProductsContext } from "../../context/ProductsContext"

export const Home = () => {

    const { products, setProducts } = useContext(ProductsContext);

    console.log(products)


    return (
        <section>

            {products && products.map(product => product.name)}

            dasdadas
        </section>
    )
}