import React, { useState , useEffect} from 'react';
import {useAppSelector, useAppDispatch} from "../../utils/hooks"
import { RootState } from '../../store/store';
import { fetchProducts } from './searchbaSlice';
import "./searchbar.css"

export const Searchbar = () => {

  const products = useAppSelector((state: RootState) => state.searchbar.products);
  const dispatch = useAppDispatch()

  useEffect(()=>{
    dispatch(fetchProducts())
  },[])
  
  
  const [suggestions, setSuggestions] = useState<string[]>([]);

  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userInput = e.target.value;

    if(userInput.length>0){

      
  
      // Filter products based on the user input
      const matchedProducts = products.filter((product) =>
        product.name.toLowerCase().includes(userInput.toLowerCase())
      );
    
      // Extract the matched product names from the filtered products
      const matchedProductNames = matchedProducts.map((product) => product.name);
    
      // Update the suggestions with the matched product names
      setSuggestions(matchedProductNames);
    }
    else{
      setSuggestions([])
    }
   
    
  };
  

  return (
    <div className="search-container">
      <div className="left">
        {/* <FontAwesomeIcon icon={faCartShopping}  /> */}
      </div>
      <div className='right'>
        <input
          type="text"
          onChange={handleInputChange}
          placeholder="Search products..."
        />

        {suggestions.length > 0 && (
          <div className="dropdown">
            <ul>
              {suggestions.map((productName, index) => (
                <li key={index}>{productName}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      
    </div>
  );
};

export default Searchbar