import React from 'react'
import ProductCard from './ProductCard'
function ProductContainer() {
  return (
    <div className='w-full h-full ml-3 pr-5 pl-5 pt-1 grid  grid-cols-2 sm:grid-cols-4 gap-9 sm:gap-4' >
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
    </div>
  )
}

export default ProductContainer