import React, { useState } from 'react';
import './Carousel.css';

const Carousel = ({ destinations }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? destinations.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === destinations.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carousel">
      <button className="carousel-button" onClick={handlePrevClick}>
        &lt;
      </button>
      <div className="carousel-images">
        {destinations.map((destination, index) => (
          <div
            key={index}
            className={`carousel-image ${index === currentIndex ? 'active' : ''}`}
          >
            <img src={destination.photo} alt={destination.title} />
            <h3>{destination.title}</h3>
            <p>{destination.description}</p>
          </div>
        ))}
      </div>
      <button className="carousel-button" onClick={handleNextClick}>
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
