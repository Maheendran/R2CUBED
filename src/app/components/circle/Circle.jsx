"use client";
import React, { useEffect } from "react";

import FancyCarousel from "react-fancy-circular-carousel";
import "react-fancy-circular-carousel/FancyCarousel.css";
// import Info from './Info';

import { useState } from "react";

const Circle = () => {
  const screenSize = window.screen.width;
  const [childImg, setChildImg] = useState(40);
  const [carouselRadius, setCarouselRadius] = useState(150);
  const [centralImageRadius, setCentralImageRadius] = useState(50);
  useEffect(() => {
    console.log(screenSize, "screenSize");

    if (screenSize < 480) {
      setChildImg(25);
      setCarouselRadius(120);
      setCentralImageRadius(50);
      return
    }
    if (screenSize < 766) {
    
      setChildImg(30);
      setCarouselRadius(140);
      setCentralImageRadius(55);
      return
    }
  }, [screenSize]);
  const [focusElement, setFocusElement] = useState(0);
  const images = [
    "/Image/1.png",
    "/Image/7.png",
    "/Image/5.png",
    "/Image/1.png",
    "/Image/3.png",
    "/Image/7.png",
  ];
  const info = [
    "Boosted Productivity",
    "Reduced Downtime",
    "Optimized Processes",
    "Improved Quality",
    " Easier Upskilling ",
    "Simplified Compliance",
  ];
  return (
    <div className="carousel relative  w-full md:w-[45%] lg:w-[65%] h-fit md:h-[50vh]    text-white   mx-auto my-[4rem]">
      <div className="maincircle ml-[1.3rem]  absolute left-0 right-0 bottom-0 top-0  mx-auto">
        <FancyCarousel
          images={images}
          setFocusElement={setFocusElement}
          carouselRadius={carouselRadius}
          peripheralImageRadius={childImg}
          centralImageRadius={centralImageRadius}
          focusElementStyling={{ border: "2px solid #ba4949" }}
          autoRotateTime={1}
          borderWidth={4}
          borderHexColor={"1c364f"}
        />
      </div>

      <div
        className=" h-fit  mt-[48vh] md:mt-[52vh] lg:absolute text-white
       lg:top-0  lg:right-0 bottom-0  text-center lg:my-auto"
      >
        <p> {info[focusElement]} </p>
      </div>
    </div>
  );
};

export default Circle;
