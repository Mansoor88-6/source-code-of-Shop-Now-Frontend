import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import Searchbar from '../../features/searchbar/searchbar'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

import "./index.css"






const Header: React.FC = () => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [categories] = useState<string[]>(["men","women","kids"])

    

    return (
      <>
      <header className="header-container">
          <div className="logo-container">
            <Link to={'/'}>
              <FontAwesomeIcon icon={faCartShopping} style={{color: "#fafafa",}} />
            </Link>
            
          </div>
          <div className="search-container">
            <Searchbar/>
          </div>
          <div className="category-container">
            {categories.map((category, index) => (
                <Link to={`/${category}`} key={index} className='category-list'> {category} </Link>
            ))}
          </div>
          
        </header>
        
      </>
        
      );
};

export default Header