"use client";
import React from 'react'


import FancyCarousel from "react-fancy-circular-carousel";
import 'react-fancy-circular-carousel/FancyCarousel.css';
// import Info from './Info';

import { useState } from 'react';

const Circle = () => {
    const [focusElement, setFocusElement] = useState(0);
    const images = ['/2.png', '/2.png','/2.png','/2.png','/2.png','/2.png','/2.png','/2.png'];
    const info = [ 'Boosted Productivity',
                 'Reduced Downtime',
                  'Optimized Processes',
                  'Improved Quality',
                  ' Easier Upskilling ',
                  'Simplified Compliance'];
  return (
    <div className="carousel">
    <div className='maincircle'>
   <FancyCarousel 
   images={images} 
   setFocusElement={setFocusElement}
   carouselRadius={200}
      peripheralImageRadius={50}
      centralImageRadius={50}
      focusElementStyling={{border: '2px solid #ba4949'}}
      autoRotateTime={2}
      borderWidth={4}
      borderHexColor={'1c364f'}
   />
      <div className="info-box-wrapper">
        <p> {info[focusElement]} </p>
      </div>
      </div>
  </div>
  )
}

export default Circle