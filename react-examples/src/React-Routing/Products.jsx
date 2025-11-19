import React from "react";
import { Link } from "react-router-dom";

const ProductsComponent = () => {

    const sampleProducts = [
        {id: 1, name: "Mobiles"},
        {id: 2, name: "Televisions"},
        {id: 3, name: "Laptops"}
    ];

    return (
        <div>
            <h1 className="p-4 text-2xl">Products Page</h1>
            <ul style={{padding:'2px'}}>
                 {sampleProducts?.map((item) => (
                    <li key={item.id} data-testid="product-item">
                        <Link style={{color:'blue'}} to={`/products/${item.id}`}>{item.name}</Link>
                    </li>
                    ))}
            </ul>
        </div>
    );
}

export default ProductsComponent;