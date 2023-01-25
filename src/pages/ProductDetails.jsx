import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect, useState,  } from "react";



function ProductDetails(){
    const{ id } = useParams();
    const[product,setProduct] = useState(null);
    const navigate = useNavigate();
    useEffect(() =>{
        const controller = new AbortController();
        axios
            .get(`http://localhost:8000/api/products/${id}`,{signal:controller.signal})
            .then(res => setProduct(res.data))
            .catch(err => console.log(err));
        return() => controller.abort();
    },[]);

    const handleDelete = () =>{
        axios
        .delete(`http://localhost:8000/api/products/${id}`)
        .then(res => {
            console.log(res.data)
            navigate('/')
        })
        .catch(err => console.log(err));
    }



    return(
        <div>
            <h1>Product Details:</h1>
            {product && <div>
                <h5>Product: {product.title}</h5>
                <h5>Price: {product.price}</h5>   
                <h5>Description: {product.description}</h5> 
                <Link to={`/products/edit/${product._id}`}>EDIT</Link>
                <button onClick={handleDelete}>Delete</button>      
            </div> }
                
            
        </div>

        
    )
}
export default ProductDetails;