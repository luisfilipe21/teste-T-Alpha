import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import { CgClose } from "react-icons/cg";
import { FormEditProduct } from "../../form/FormEditProduct";
import style from "./style.module.scss";

export const EditModal = () => {
    const { products, setEditModal , } = useContext(ProductsContext);
    
    return (
        <div className={style.modalContainer}>
            <div className={style.modal}>
                <FormEditProduct />
                <span className={style.spanX} onClick={() => setEditModal(false)}><CgClose /></span>
            </div>
        </div>
    )
}