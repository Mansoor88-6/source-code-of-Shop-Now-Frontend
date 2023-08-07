import React from 'react'
import "./footer.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

export const Footer: React.FC = () => {
  return (
    <div className='footer-container'>
        <div className="upper">
            <div className="upper-container">
                <div className="sm-box">
                    <FontAwesomeIcon icon={faCartShopping} style={{color: "#fafafa",}} className='fa-4x'/>
                    <p>Jail Road, Gulberg 2, Lahore</p>
                    <a><p>ShopNow.com</p></a>
                    <p>111-222-333</p>
                </div>
                <div className="sm-box">
                    <h3>Shopping Categories</h3>
                    <a><p>MEN's Shopping</p></a>
                    <a><p>KID's Shopping</p></a>
                    <a><p>WOMEN's Shopping</p></a>
                </div>
                <div className="sm-box">
                    <h3>Useful links</h3>
                    <a><p>About us</p></a>
                    <a><p>Homepage</p></a>
                    <a><p>Contact us</p></a>
                </div>
                <div className="sm-box">
                    <h3>Help and information</h3>
                    <a><p>Help</p></a>
                    <a><p>FAQs</p></a>
                    <a><p>Shipping</p></a>
                </div>
            </div>
        </div>
        <div className="lower">
            <p>Copyright &copy; 2023 ShopNow.com, All rights reserved</p>
            <p> Developer: Mansoor K</p>
            <a href='https://www.linkedin.com/in/mansoor-khan-bb7822172/' target='_blank'><FontAwesomeIcon icon={faLinkedinIn} style={{color: "#b79b34",}} className='fa-2x'/></a>
        </div>
    </div>
  )
}


