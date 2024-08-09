import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../../service";


export const ProductsContext = createContext({});

export const ProductsProvider = ({ children }) => {

    const [products, setProducts] = useState([]);
    const [oneProduct, setOneProduct] = useState([]);
    const [editModal, setEditModal] = useState(null);
    const [editProduct, setEditProduct] = useState(null);


    useEffect(() => {

        const token = localStorage.getItem("@TOKEN");

        if (token) {
            const getAllProducts = async () => {
                try {
                    const { data } = await api.get("/api/products/get-all-products", {
                        headers: { Authorization: `Bearer ${token}` }
                    })
                    setProducts(data.data)
                } catch (error) {
                    console.error(error);
                }
            }
            getAllProducts();
        }
    }, [])


    const getOneProduct = async (productId) => {
        const token = localStorage.getItem("@TOKEN");

        if (token) {
            const { data } = await api.get(`/api/products/get-one-product/${productId}`);

            const oneProduct = products.data.products.map(product => {
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
                const { data } = await api.post("/api/products/create-product", payload, {
                    headers: { Authorization: `Bearer ${token}` }
                })
                setProducts([...products, data]);

            } catch (error) {
                console.log(error);
            }
        }
    }

    const updateProduct = async (payload) => {
        const token = localStorage.getItem("@TOKEN");

        if (token) {
            try {
                const newEditProduct = [...editProduct, ...payload]
                const { data } = await api.patch(`/api/products/update-product/${editProduct.id}`, newEditProduct, {
                    headers: { Authorization: `Bearer ${token}` }
                })

                const updatedProduct = products.products.map((product) =>
                    products.products.id === editProduct.id ? data : product
                )
                setProducts(updatedProduct)
            } catch (error) {
                console.log(error.message);
            }
        }
    }

    const deleteProduct = async (productId) => {
        const token = localStorage.getItem("@TOKEN");
        try {
            await api.delete(`/api/products/delete-product/${productId}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            const newProductsList = products.filter(({ id }) => id !== productId);
            setProducts(newProductsList);

        } catch (error) {

            console.log("error")
            console.log(error.message);
        }
    }





    return (
        <ProductsContext.Provider value={({
            products, setProducts, createProduct, updateProduct, deleteProduct, oneProduct, setOneProduct
            , getOneProduct, editModal, setEditModal, editProduct, setEditProduct
        })}>
            {children}
        </ProductsContext.Provider>
    )
}