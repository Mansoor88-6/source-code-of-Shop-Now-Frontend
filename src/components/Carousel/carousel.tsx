import { useState } from 'react';
import './Carousel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGreaterThan, faLessThan } from '@fortawesome/free-solid-svg-icons'
import { Product } from '../../utils/type';


interface carouselProductsProps {
  products : Product[]
  heading: string
}



const Carousel: React.FC<carouselProductsProps> = ({products,heading}) => {
  const [startIndex, setStartIndex] = useState(0);

  const handlePrevClick = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNextClick = () => {
    setStartIndex((prevIndex) =>
      Math.min(prevIndex + 1, products.length - 3)
    );
  };

  return (
    <>
    <div className="heading">
      <h2>
        {heading}
      </h2>
      </div>
    <div className="carousel-container">
        <div className="left-button">
        <button onClick={handlePrevClick} disabled={startIndex === 0}>
            <FontAwesomeIcon icon={faLessThan} />
        </button>
      </div>

      <div className="carousel">
        {products.slice(startIndex, startIndex + 3).map((product) => (
          <div className="product" key={product.id}>
            <img src={product.image.image_url} alt={product.name} />
            {/* <h3>{product.name}</h3> */}
          </div>
        ))}
      </div>
      
      <div className="right-button">
        <button onClick={handleNextClick} disabled={startIndex === products.length - 3}>
        <FontAwesomeIcon icon={faGreaterThan} />
        </button>
      </div>
    </div>
    </>
    
  );
};

export default Carousel;
