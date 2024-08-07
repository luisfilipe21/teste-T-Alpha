import { createContext, useEffect, useState } from "react";
import { api } from "../../service";


export const ProductsContext = createContext({});

export const ProductsProvider = ({ children }) => {

    const [products, setProducts] = useState([]);
    const [oneProduct, setOneProduct] = useState([]);


    const getOneProduct = async (productId) => {
        const token = localStorage.getItem("@TOKEN");

        if (token) {
            const { data } = await api.get(`/api/products/get-one-product/${productId}`);

            const oneProduct = products.map(product => {
                if (product.id === productId) {
                    return data;
                } else {
                    return product;
                }
            })
            setOneProduct(oneProduct)
        }
    }

    const createProduct = async (payload) => {
        const token = localStorage.getItem("@TOKEN");

        if (token) {
            try {
                const newProduct = { ...payload };

                const {data} = await api.post("/api/products/create-product", newProduct, {
                    headers: { Authorization: `Bearer ${token}` }
                })
                setProducts(data);
                console.log(products)
            } catch (error) {
                console.log(error);
            }
        }
    }

    const updateProduct = async (productId) => {
        const token = localStorage.getItem("@TOKEN");

        if (token) {
            try {
                const { data } = await api.patch(`/api/products/update-product/${productId}`, {
                    headers: { Authorization: `Bearer ${token}` }
                })

                const updatedProduct = products.map(product => {
                    if (product.id === productId) {
                        return data;
                    } else {
                        return product;
                    }
                })

                setProducts(updatedProduct)
            } catch (error) {
                console.log(error);
            }
        }
    }

    const deleteProduct = async (productId) => {
        const token = localStorage.getItem("@TOKEN");

        if (token) {
            try {
                await api.delete(`/api/products/delete-product/${productId}`)
            } catch (error) {
                console.log(error)
            }
        }
    }


    useEffect(() => {
        const getAllProducts = async () => {
            const token = localStorage.getItem("@TOKEN");

            if (token) {
                try {
                    const { data } = await api.get("/api/products/get-all-products",{
                        headers: { Authorization: `Bearer ${token}`}
                    })
                    setProducts(data)
                } catch (error) {
                    console.error(error);
                }
            }
        }
        getAllProducts();
    }, [])


    return (
        <ProductsContext.Provider value={({
            products, setProducts, createProduct, updateProduct, deleteProduct, oneProduct, setOneProduct
            , getOneProduct})}>
            {children}
        </ProductsContext.Provider>
    )
}