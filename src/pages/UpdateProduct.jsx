import axios from 'axios';
import { useNavigate, useParams  } from 'react-router-dom';
import { useEffect, useState } from 'react';

function UpdateProduct() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product,setProduct] = useState({});


    useEffect(() => {
        const controller = new AbortController();
        axios
        .get(`http://localhost:8000/api/products/${id}`,{signal:controller.signal})
        .then(res => {
            setProduct(res.data);
        })
        .catch(err => console.log(err));
        return() => controller.abort();

    },[id]);

    const handleChange = (e) =>{
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
        .put(`http://localhost:8000/api/products/${id}`,{
            title:product.title,
            price:product.price,
            description:product.description,
        })
        .then(res => {
            console.log(res.data);
            navigate('/products');
        })
        .catch(err => console.log(err));
    };



    return (
        <div>
            <h1>Edit Product</h1>
            <div>
                <div>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Product</label>
                            <input type="text" name="title" value={product.title} onChange={handleChange}></input>
                            <input type="number" name="price" value={product.price} onChange={handleChange}></input>
                            <input type="text" name="description" value={product.description} onChange={handleChange}></input>
                            <button>Edit Product</button>
                        </div>
                    </form>


                </div>


            </div>



        </div>
    )
}

export default UpdateProduct;