import React, { useEffect, useState } from "react";
import axios from 'axios';

const ConditionalRenderingComponent = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchProducts = () => {
        axios.get("https://fakestoreapi.com/products")
            .then((res) => setProducts(res.data));
            setLoading(false);
    } 

    useEffect(() => {
        fetchProducts();
    },[])

    if (loading) return <h1>Loading...</h1>

    return (
        <div>
            <h1 style = {{textAlign : 'center'}}>Products data</h1>
            <ul>
                {products.map((product) => (
                    <li key = {product.id}>{product.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default ConditionalRenderingComponent;