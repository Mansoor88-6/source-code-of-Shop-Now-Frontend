import React from 'react'
import SingleProductComp from '../../components/singleProdDisplay/singleProductDisplay'
import { useLocation } from 'react-router-dom'
import { useAppSelector } from '../../utils/hooks'
import "./single-product.css"

export const SingleProduct:React.FC = () => {
    const allProducts = useAppSelector(state=> state.searchbar.products)
    const {state} = useLocation()
    const product = allProducts.find(prod => prod.name === state.productName )
  return (
    <div>
    {product ? (
        <SingleProductComp product={product} />
    ) : (
        <p>Product not found</p>
    )}
    </div>)
}
