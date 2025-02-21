import React, { useState, useEffect } from 'react';
import './css/CarouselMarcas.css';

const CarouselMarcas = () => {
  const images = [
    '/marcas/ametek.png',
    '/marcas/drager.png',
    '/marcas/federal.png',
    '/marcas/phoenix.png',
    '/marcas/siemens-1.png',
    '/marcas/siemens.png',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 5; 

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="carousel-container">
      <div
        className="carousel"
        style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
      >
        {images.concat(images).map((image, index) => (
          <img key={index} src={image} alt={`Marca ${index}`} className="carousel-image" />
        ))}
      </div>
    </div>
  );
};

export default CarouselMarcas;
