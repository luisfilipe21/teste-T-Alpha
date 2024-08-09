import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import { CgClose } from "react-icons/cg";
import { FormEditProduct } from "../../form/FormEditProduct";

export const EditModal = () => {
    const { products, setEditModal , } = useContext(ProductsContext);
    
    return (
        <div>
            <div>
                <FormEditProduct />
                <span onClick={() => setEditModal(false)}><CgClose /></span>
            </div>
        </div>
    )
}