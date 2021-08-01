import React from 'react';
import Image from 'next/image';
import Carousel from 'react-bootstrap/Carousel';

export default function PortfolioCarousel(props) {
  return (
    <>
      <Carousel interval="2500" style={{ width: '250px' }}>
        {props.slides.map((slide, index) => (
          <Carousel.Item>
            <Image
              src={slide.src}
              width="250"
              height="250"
              alt={slide.alt}
              key={index}
              className="img-class"
            />

          </Carousel.Item>
        ))}
      </Carousel>
    </>

  );
}
