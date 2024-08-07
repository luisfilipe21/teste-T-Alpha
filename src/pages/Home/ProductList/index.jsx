export const ProductList = ({product}) => {
    return(
        <div>
        {product.name}
        {product.description}
        {product.price}
        {product.stock}
        </div>
    )
}