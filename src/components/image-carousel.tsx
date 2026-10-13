"use client";

import { useState } from "react";

type CarouselProps = {
  images: Array<{ src: string; alt: string }>;
};

export default function ImageCarousel({ images }: CarouselProps) {
  const [current, setCurrent] = useState(0);

  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-track">
        {images.map((image, index) => (
          <div key={index} className="carousel-item">
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
      <div className="carousel-controls">
        {images.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${current === index ? "active" : ""}`}
            onClick={() => goToSlide(index)}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
