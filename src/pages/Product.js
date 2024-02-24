import React from 'react'
import { Link } from 'react-router-dom';

function Product() {
    const PRODUCTS = [
      { id: "p1", title: "Product 1" },
      { id: "p2", title: "Product 2" },
      { id: "p3", title: "Product 3" },
    ];


  return (
    <div>
          <h1>Product page</h1>
          <ul>
              {PRODUCTS.map((product) => (
                  <li key={product.id}>
                      <Link to={product.id}>{product.title}</Link>
                  </li>
              ))}
          </ul>

          
    </div>
  )
}

export default Product
