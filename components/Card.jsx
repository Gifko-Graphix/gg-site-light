import React from 'react';
import { Carousel } from '3d-react-carousal';

export default function Card() {
  const slides = [
    <img src="https://picsum.photos/800/300/?random" alt="1" />,
    <img src="https://picsum.photos/800/301/?random" alt="2" />,
    <img src="https://picsum.photos/800/302/?random" alt="3" />,
    <img src="https://picsum.photos/800/303/?random" alt="4" />,
    <img src="https://picsum.photos/800/304/?random" alt="5" />];

  return (
    <div className="card" style={{ width: '395px' }}>
      <div className="card-body relative">
        <div className="grid grid-cols-3 justify-between">
          <div className="flex flex-col justify-center">
            <Carousel slides={slides} autoplay interval={1000} />
            <h1 className="text-center text-xl font-bold">Name of Item</h1>
          </div>
        </div>
        <div>
          <p className="card-text py-6">Some description of the item.</p>
          {/* <a href="/" className="card-link text-purple-600">View Item &gt;</a> */}
        </div>
        <div className="flex justify-end absolute bottom-2.5 right-2.5 space-x-2.5" />
        <br />
      </div>
    </div>
  );
}
