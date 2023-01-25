import axios from 'axios';
import { useEffect, useState } from 'react';
import ProductForm from '../components/ProductForm'
import ProductList from '../components/ProductList';


function Main(){
    const [products,setProducts] =useState('');
    const [loaded,setLoaded] = useState(false)

    const loadedState = () =>{
        setLoaded(!loaded)
    }
    
    useEffect(() => {
        const controller = new AbortController();
        axios
            .get('http://localhost:8000/api/products',{signal: controller.signal})
            .then((res) => {
                setProducts(res.data);
                setLoaded(true)
            })
            .catch((err) => console.log(err));
        return () => controller.abort();
    }, [loaded]);

    const handleDelete = (id) =>{
        axios
        .delete(`http://localhost:8000/api/products/${id}`)
        .then(res => {
            console.log(res.data)
            loadedState();
        })
        .catch(err => console.log(err));
    }


    return(
        <div>
            <h1>Project Manager</h1>
            <ProductForm loaded={loadedState}/>
            {loaded && <ProductList products={products} handleDelete={handleDelete}/>}
        </div>

    )
}
export default Main;