import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "../UserContext";

export const ProductsContext = createContext({});

export const ProductsProvider = ({ children }) => {

    const { user } = useContext(UserContext);
    const [products, setProducts] = useState([]);


    const createPosition = async (payload) => {
        const token = localStorage.getItem("@TOKEN");

        if(token){
            try {
                const newProduct = {...payload};
                
                const {data} = await api.post("/api/products/create-product", payload, {
                    headers: { Authorization: `Bearer ${token}`}
                })
                setProducts(...data);

            } catch (error) {
                console.log(error);
            }
        }
    }



    useEffect(() => {
        const getAllProducts = async () => {
            const token = localStorage.getItem("@TOKEN");

            if (token) {
                try {
                    const { data } = await api.get("/api/products/get-all-products")
                    setProducts(data)
                } catch (error) {
                    console.error(error);
                }
            }

        }
    }, [])



    // headers: { Authorization: `Bearer ${token}`
    // const token = localStorage.getItem("@TOKEN");

    //     if(token){

    //     }

    return (
        <ProductsContext.Provider value={({ products, setProducts , createPosition})}>
            {children}
        </ProductsContext.Provider>
    )
}