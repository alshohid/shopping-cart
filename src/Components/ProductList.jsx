import React, { useEffect } from 'react'
import ShowingProductList from './ShowingProductList'

const ProductList = ({ products = {} }) => {
  return (
    <div className="container mx-auto my-3">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        {products.map((product) => (
          <ShowingProductList key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default ProductList
