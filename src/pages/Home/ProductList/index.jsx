import { FaEdit } from "react-icons/fa";
import { ProductsContext } from "../../../context/ProductsContext";
import { useContext } from "react";
import { BiTrash } from "react-icons/bi";

export const ProductList = ({ product }) => {

    const { setEditModal , editProduct, setEditProduct, deleteProduct} = useContext(ProductsContext);

    const action = () => {
        setEditModal(true)
        setEditProduct(product)
        console.log(editProduct)
    }

    const erasePost = () => {
        console.log(product.id)
        deleteProduct(product.id)
    }

    return (
        <div>
            <div>
                <h3>
                    {product.name}
                </h3>
                <p>
                    {product.description}
                </p>
                <div>
                    <p>
                        {product.price}
                    </p>
                    <p>
                        {product.stock}
                    </p>
                </div>
            </div>
            <BiTrash onClick={erasePost} /> 
            <FaEdit onClick={action} />
        </div>
    )
}