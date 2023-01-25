import axios from 'axios';
import { useState } from 'react';

function ProductForm(props){
    const [title,setTitle] = useState("");
    const [price,setPrice] = useState("");
    const [description,setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newProduct = {
            title,
            price,
            description
        }
        axios
            .post('http://localhost:8000/api/products', newProduct)
            .then(() => props.loaded())
            .catch(err => console.log(err));
    }
    return(
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        Title: <input type="text" name="title" value ={title} onChange={(e) => setTitle(e.target.value)}/>
                        Price: <input type="number" name="price" value = {price} onChange={(e) => setPrice(e.target.value)}/>
                        Description: <input type="text" name="description" value = {description} onChange={(e) => setDescription(e.target.value)}/>
                        <button type="submit">SUBMIT</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ProductForm;