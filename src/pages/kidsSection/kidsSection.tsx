import React, { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../../utils/hooks'
import { fetchProducts } from '../../features/searchbar/searchbaSlice'

import { ProductDisplay } from '../../components/productDisplay/productDisplay'

export const KidsSection:React.FC = () => {
    const products = useAppSelector(state => state.searchbar.products)
    const dispatch= useAppDispatch()
    useEffect(()=>{
        dispatch(fetchProducts())
    },[])
    
    const menProducts = products.filter(product => product.category == "kids")
    const repeatedProducts = [...Array(6)].map((_)=>{
        return menProducts.map(prod => prod)
    })
    

  return (
    <div>
        <ProductDisplay repeatedProducts={repeatedProducts}/>
    </div>
  )
}
