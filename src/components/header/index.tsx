import React, {useState} from 'react';

import Searchbar from '../../features/searchbar/searchbar'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

import "./index.css"






const Header: React.FC = () => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [categories] = useState<string[]>(["Men's","Women's","Kid's"])

    

    return (
      <>
      <header className="header-container">
          <div className="logo-container">
            <FontAwesomeIcon icon={faCartShopping} style={{color: "#fafafa",}} />
          </div>
          <div className="search-container">
            
            <Searchbar/>
          </div>
          <div className="category-container">
            {categories.map((category, index) => (
              <span key={index} className="category">
                {category}
              </span>
            ))}
          </div>
          
        </header>
        
      </>
        
      );
};

export default Header