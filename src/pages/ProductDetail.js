import React from 'react'
import { Link, useParams } from 'react-router-dom'

function ProductDetail() {
    const params = useParams();


  return (
    <div>
      <h1>Product details page</h1>
      <p>{params.productId}</p>
      <p>
        <Link to=".." relative="path">
          Go back
        </Link>
      </p>
    </div>
  );
}

export default ProductDetail
