// FeaturedProductSection.tsx
import React, { useEffect } from 'react';
import { fetchFeaturedProducts } from './featureProductSlice';
import {useAppSelector, useAppDispatch} from "../../utils/hooks"
import { RootState } from '../../store/store';
import "./featureProduct.css"



const FeaturedProductSection: React.FC = () => {
    const products = useAppSelector((state: RootState)=> state.featuredSection.products)
    
    const dispatch = useAppDispatch()
    useEffect(() => {
      dispatch(fetchFeaturedProducts())
    }, [])
    console.log(products)
  return (
    <div className="featured-section">
      <div className="big-product">
        <img src={products[0]?.image.image_url} alt={products[0]?.name} />
        
      </div>
      <div className="small-products">
        <div className="small-up-product-container">
          <div className="small-product-1">
            <img src={products[1]?.image.image_url} alt={products[1]?.name} />
            
          </div>
          <div className="small-product-2">
            <img src={products[3]?.image.image_url} alt={products[2]?.name} />
            
          </div>
      
         </div>
        
        <div className="third-product">
          <img src={products[2]?.image.image_url} alt={products[3]?.name} />
          
        </div>
      </div>
    </div>
  );
};

export default FeaturedProductSection;
