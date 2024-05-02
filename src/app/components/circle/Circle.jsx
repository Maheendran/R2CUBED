"use client";
import React from 'react'


import FancyCarousel from "react-fancy-circular-carousel";
import 'react-fancy-circular-carousel/FancyCarousel.css';
// import Info from './Info';

import { useState } from 'react';

const Circle = () => {
    const [focusElement, setFocusElement] = useState(0);
    const images = ['/Image/1.png', '/Image/2.png','/Image/4.png','/Image/6.png','/Image/3.png','/Image/5.png','/Image/7.png'];
    const info = [ 'Boosted Productivity',
                 'Reduced Downtime',
                  'Optimized Processes',
                  'Improved Quality',
                  ' Easier Upskilling ',
                  'Simplified Compliance'];
  return (
    <div className="carousel  text-white relative w-[65%] mx-auto my-[4rem]">
    <div className='maincircle'>
   <FancyCarousel 
   images={images} 
   setFocusElement={setFocusElement}
   carouselRadius={150}
      peripheralImageRadius={40}
      centralImageRadius={50}
      focusElementStyling={{border: '2px solid #ba4949'}}
      autoRotateTime={2}
      borderWidth={4}
      borderHexColor={'1c364f'}
   />
      <div className=" h-fit absolute text-white
       top-0 right-0 bottom-0 my-auto">
        <p > {info[focusElement]} </p>
      </div>
      </div>
  </div>
  )
}

export default Circle