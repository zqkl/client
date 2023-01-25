import { Link } from 'react-router-dom'
function ProductList(props){
    const { products } = props
    return(
        products && products.map(product => {
            return (
                <div key={product._id}>
                    <div>
                        <Link to={`/products/${product._id}`}><p>Product: {product.title}</p></Link>
                        <p>Price: {product.price}</p>
                        <p>Description: {product.description}</p>
                        <button onClick={()=>props.handleDelete(product._id)}>Delete</button>
                        

                    </div>
                </div>
            )
        })
        
    )
}
export default ProductList;