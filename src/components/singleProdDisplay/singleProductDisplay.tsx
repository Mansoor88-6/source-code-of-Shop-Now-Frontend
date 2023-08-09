import React, { useState } from 'react';
import { Product } from '../../utils/type';
import "./singleProdDisplay.css"

interface Prop{
    product: Product
}

const SingleProductComp: React.FC<Prop> = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(event.target.value, 10);
    setQuantity(newQuantity);
  };

  const handleBuyClick = () => {
    // Perform the buying logic here using the product and quantity
    console.log(`Buying ${quantity} ${product.name}(s)`);
  };

  return (
    <div className="product-container">
      <img src={product.image.image_url} alt={product.name} className="product-image" />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <div>
        <label>Quantity:</label>
        <input
          type="number"
          value={quantity}
          onChange={handleQuantityChange}
          min={1}
          className='single-input'
        />
      </div>
      <button onClick={handleBuyClick}>Buy</button>
    </div>
  );
};

export default SingleProductComp;
