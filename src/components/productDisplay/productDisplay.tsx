import React from 'react'
import { Product } from '../../utils/type'
import Header from '../header'
import './productDisplay.css'
import { Link } from 'react-router-dom'

interface ProductType {
    repeatedProducts: Product[][]
}

export const ProductDisplay: React.FC <ProductType>= ({repeatedProducts}) => {
    return (
        <div>
          <div>
            <Header/>
          </div>
          <div className='parent'>
            {repeatedProducts.map((productArr: Product[]) => {
              return productArr.map((product, index) => {
                
                return (<div key={index}>
                    <Link to={"/single-product"} state={{productName : product.name}}>
                      <img src={product.image.image_url} alt="" />
                    </Link>
                    
                    </div>)
              });
            })}
          </div>
        </div>
      )
}

