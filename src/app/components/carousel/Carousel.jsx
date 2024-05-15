"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { TiInputChecked } from "react-icons/ti";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Carousel() {
  const images = [
    {
      src: "/Image/1.png",
      alt: "1",
      name: "Automotive",
      role: "Web3 developer",
      task: [
        "Failure prediction",
        "Uptime management",
        "Process planning and prediction",
        "Energy management",
        "Downtime reduction",
      ],
    },
    {
      src: "/Image/2.png",
      alt: "2",
      name: "Warehousing operations",
      role: "WordPress developer",
      task: [
        "Material movement",
        "Inventory management and control",
        "Process planning",
        "Downtime reduction",
        "Energy management",
      ],
    },
    {
      src: "/Image/3.png",
      alt: "3",
      name: "Oil and Gas",
      role: "Java developer",
      task: [
        "Downtime prediction",
        "Uptime management",
        "Energy management",
        "Productivity uplift",
        "CO2 emission management and carbon neutrality",
        "Operational process simulation and planning",
      ],
    },
    {
      src: "/Image/4.png",
      alt: "4",
      name: "Food & beverage",
      role: "Web developer",
      task: [
         "Yield improvement",
         "Energy management",
         "Uptime improvement & prediction",
         "Downtime reduction",
         "Product / process change modelling and simulation"
        ],
    },
    {
      src: "/Image/5.png",
      alt: "5",
      name: "Industrial power plants",
      role: "PHP developer",
      task: [
          "Downtime reduction and avoidance",
          "Uptime improvement & productivity boost",
          "Energy management",
          "Planned and predictive maintenance",
          "Capacity planning and simulation"
  
         ],
    },
    {
      src: "/Image/6.png",
      alt: "6",
      name: "Building management",
      role: "SEO developer",
      task: [
  
          "Power management",
          "Thermal and AC management",
          "Occupancy management",
          "Safety and security management",
          "Space management",
          "Building efficency management"
  
         ],
    },
    {
      src: "/Image/7.png",
      alt: "7",
      name: "Military applications",
      role: "SQL developer",
      task: [
  
         "Captive power unit management and uptime enforcement",
         "Telecom system function and functional readiness",
         "Vehicle & asset location management",
         "Troop movement and logistics",
         "Field level health & safety policy enforcement"
  
         ],
    },
  ];
  
  return (
    <>
      <Swiper
        spaceBetween={10}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {images.map((e) => (
          <SwiperSlide>
            <div className="w-full h-fit  relative min-h-[50vh] ">
              <img
                className=" absolute z-[-1] w-full h-full"
                src={e.src}
                alt=""
              />

              <div className="text-white   w-[80%] z-50   py-2 text-center mx-auto left-0 right-0  h-fit  text-[1.4rem]  top-0">
                <p>{e.name}</p>
                <div className=" text-start  mt-[1.5rem] w-[80%] mx-auto h-fit text-white z-50">
                  {e.task.map((val) => (
                    <div className="text-white text-[1rem] mt-[1rem]">
                      <p className=" my-auto flex gap-2 w-full">
                        <span  className="w-[1rem] h-[1rem]">
                        <img className="min-w-[1.2rem] min-h-[1.2rem] rounded-[0.25rem]" 
                        src="https://th.bing.com/th/id/OIP.SeEx5t0z_qWeFj9GryrOQQAAAA?rs=1&pid=ImgDetMain" alt="" />
                        </span>
                        {val}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
