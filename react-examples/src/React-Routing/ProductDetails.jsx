import React from "react";
import { useParams } from 'react-router-dom';

const ProductDetailsComponent = () => {
    const { id } = useParams();

    return (
        <div>
            <h2 className="p-4 text-2xl">Product Details Page</h2>
            <p>Product Id : {id}</p>
        </div>
    );
}

export default ProductDetailsComponent;