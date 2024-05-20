"use client";
import React, { useEffect, useRef, useState } from "react";

import { FaPlay } from "react-icons/fa";
import NewNav from "../components/newNavb/NewNav";
import Footer from "../components/footer/Footer";

const Page = () => {
  const videoRef = useRef();

  useEffect(()=>{
    const video = videoRef.current;
    if(video){
      video.play()

    }
  },[])

  return (
    
   
   <>
   <NewNav/>
  
            <div className="w-full h-[91.5vh]  relative flex  justify-center  m-auto">
        <div
          className="m-auto  z-20 w-[89%] md:w-[73%]  h-fit
          overflow-hidden   rounded-[20px] md:h-[80vh] border  absolute top-0 bottom-0 left-0 right-0"
        >
          <div className=" h-full w-full relative  rounded-[20px] border ">
            <video
              ref={videoRef}
              initial={{ opacity: 0 }}
              src="/R2.mp4"
              loop
              muted
              className=" w-full mx-auto h-full video-banner rounded-lg"
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
               
              }}
            ></video>
       
          </div>
        </div>

  
        <span className="  absolute left-0  top-0">
          <svg
            className="w-[16rem] h-[10rem] sm:w-[30rem] sm:h-[20rem]"
            viewBox="0 0 120 79"
            fill="none"
          >
            <circle
              cx="47.7119"
              cy="76.9617"
              r="1.74121"
              transform="rotate(180 47.7119 76.9617)"
              fill="#867f81"
            />
            <circle
              cx="47.7119"
              cy="61.6385"
              r="1.74121"
              transform="rotate(180 47.7119 61.6385)"
              fill="#867f81"
            />
            <circle
              cx="47.7119"
              cy="46.3163"
              r="1.74121"
              transform="rotate(180 47.7119 46.3163)"
              fill="#867f81"
            />
            <circle
              cx="47.7119"
              cy="16.7159"
              r="1.74121"
              transform="rotate(180 47.7119 16.7159)"
              fill="#867f81"
            />
            <circle
              cx="47.7119"
              cy="31.3421"
              r="1.74121"
              transform="rotate(180 47.7119 31.3421)"
              fill="#867f81"
            />
            <circle
              cx="47.7119"
              cy="1.74121"
              r="1.74121"
              transform="rotate(180 47.7119 1.74121)"
              fill="#867f81"
            />
            <circle
              cx="32.3916"
              cy="76.9617"
              r="1.74121"
              transform="rotate(180 32.3916 76.9617)"
              fill="#867f81"
            />
            <circle
              cx="32.3877"
              cy="61.6384"
              r="1.74121"
              transform="rotate(180 32.3877 61.6384)"
              fill="#867f81"
            />
            <circle
              cx="32.3916"
              cy="46.3162"
              r="1.74121"
              transform="rotate(180 32.3916 46.3162)"
              fill="#867f81"
            />
            <circle
              cx="32.3916"
              cy="16.7161"
              r="1.74121"
              transform="rotate(180 32.3916 16.7161)"
              fill="#867f81"
            />
            <circle
              cx="32.3877"
              cy="31.342"
              r="1.74121"
              transform="rotate(180 32.3877 31.342)"
              fill="#867f81"
            />
            <circle
              cx="32.3916"
              cy="1.74145"
              r="1.74121"
              transform="rotate(180 32.3916 1.74145)"
              fill="#867f81"
            />
            <circle
              cx="17.0674"
              cy="76.9617"
              r="1.74121"
              transform="rotate(180 17.0674 76.9617)"
              fill="#867f81"
            />
            <circle
              cx="17.0674"
              cy="61.6384"
              r="1.74121"
              transform="rotate(180 17.0674 61.6384)"
              fill="#867f81"
            />
            <circle
              cx="17.0674"
              cy="46.3162"
              r="1.74121"
              transform="rotate(180 17.0674 46.3162)"
              fill="#867f81"
            />
            <circle
              cx="17.0674"
              cy="16.7161"
              r="1.74121"
              transform="rotate(180 17.0674 16.7161)"
              fill="#867f81"
            />
            <circle
              cx="17.0674"
              cy="31.342"
              r="1.74121"
              transform="rotate(180 17.0674 31.342)"
              fill="#867f81"
            />
            <circle
              cx="17.0674"
              cy="1.74145"
              r="1.74121"
              transform="rotate(180 17.0674 1.74145)"
              fill="#867f81"
            />
            <circle
              cx="1.74316"
              cy="76.9617"
              r="1.74121"
              transform="rotate(180 1.74316 76.9617)"
              fill="#867f81"
            />
            <circle
              cx="1.74316"
              cy="61.6384"
              r="1.74121"
              transform="rotate(180 1.74316 61.6384)"
              fill="#867f81"
            />
            <circle
              cx="1.74316"
              cy="46.3162"
              r="1.74121"
              transform="rotate(180 1.74316 46.3162)"
              fill="#867f81"
            />
            <circle
              cx="1.74316"
              cy="16.7161"
              r="1.74121"
              transform="rotate(180 1.74316 16.7161)"
              fill="#867f81"
            />
            <circle
              cx="1.74316"
              cy="31.342"
              r="1.74121"
              transform="rotate(180 1.74316 31.342)"
              fill="#867f81"
            />
            <circle
              cx="1.74316"
              cy="1.74145"
              r="1.74121"
              transform="rotate(180 1.74316 1.74145)"
              fill="#867f81"
            />
          </svg>
        </span>
        <span className="absolute   bottom-0 right-0 md:right-[-2.5rem] z-10">
          <svg
            className=" w-[13.5rem] h-[10rem] sm:w-[30rem] sm:h-[20rem]"
            viewBox="0 0 1 79"
            fill="none"
          >
            <circle
              cx="47.7119"
              cy="76.9617"
              r="1.74121"
              transform="rotate(180 47.7119 76.9617)"
              fill="#867f81"
            />
            <circle
              cx="47.7119"
              cy="61.6385"
              r="1.74121"
              transform="rotate(180 47.7119 61.6385)"
              fill="#867f81"
            />
            <circle
              cx="47.7119"
              cy="46.3163"
              r="1.74121"
              transform="rotate(180 47.7119 46.3163)"
              fill="#867f81"
            />
            <circle
              cx="47.7119"
              cy="16.7159"
              r="1.74121"
              transform="rotate(180 47.7119 16.7159)"
              fill="#867f81"
            />
            <circle
              cx="47.7119"
              cy="31.3421"
              r="1.74121"
              transform="rotate(180 47.7119 31.3421)"
              fill="#867f81"
            />
            <circle
              cx="47.7119"
              cy="1.74121"
              r="1.74121"
              transform="rotate(180 47.7119 1.74121)"
              fill="#867f81"
            />
            <circle
              cx="32.3916"
              cy="76.9617"
              r="1.74121"
              transform="rotate(180 32.3916 76.9617)"
              fill="#867f81"
            />
            <circle
              cx="32.3877"
              cy="61.6384"
              r="1.74121"
              transform="rotate(180 32.3877 61.6384)"
              fill="#867f81"
            />
            <circle
              cx="32.3916"
              cy="46.3162"
              r="1.74121"
              transform="rotate(180 32.3916 46.3162)"
              fill="#867f81"
            />
            <circle
              cx="32.3916"
              cy="16.7161"
              r="1.74121"
              transform="rotate(180 32.3916 16.7161)"
              fill="#867f81"
            />
            <circle
              cx="32.3877"
              cy="31.342"
              r="1.74121"
              transform="rotate(180 32.3877 31.342)"
              fill="#867f81"
            />
            <circle
              cx="32.3916"
              cy="1.74145"
              r="1.74121"
              transform="rotate(180 32.3916 1.74145)"
              fill="#867f81"
            />
            <circle
              cx="17.0674"
              cy="76.9617"
              r="1.74121"
              transform="rotate(180 17.0674 76.9617)"
              fill="#867f81"
            />
            <circle
              cx="17.0674"
              cy="61.6384"
              r="1.74121"
              transform="rotate(180 17.0674 61.6384)"
              fill="#867f81"
            />
            <circle
              cx="17.0674"
              cy="46.3162"
              r="1.74121"
              transform="rotate(180 17.0674 46.3162)"
              fill="#867f81"
            />
            <circle
              cx="17.0674"
              cy="16.7161"
              r="1.74121"
              transform="rotate(180 17.0674 16.7161)"
              fill="#867f81"
            />
            <circle
              cx="17.0674"
              cy="31.342"
              r="1.74121"
              transform="rotate(180 17.0674 31.342)"
              fill="#867f81"
            />
            <circle
              cx="17.0674"
              cy="1.74145"
              r="1.74121"
              transform="rotate(180 17.0674 1.74145)"
              fill="#867f81"
            />
            <circle
              cx="1.74316"
              cy="76.9617"
              r="1.74121"
              transform="rotate(180 1.74316 76.9617)"
              fill="#867f81"
            />
            <circle
              cx="1.74316"
              cy="61.6384"
              r="1.74121"
              transform="rotate(180 1.74316 61.6384)"
              fill="#867f81"
            />
            <circle
              cx="1.74316"
              cy="46.3162"
              r="1.74121"
              transform="rotate(180 1.74316 46.3162)"
              fill="#867f81"
            />
            <circle
              cx="1.74316"
              cy="16.7161"
              r="1.74121"
              transform="rotate(180 1.74316 16.7161)"
              fill="#867f81"
            />
            <circle
              cx="1.74316"
              cy="31.342"
              r="1.74121"
              transform="rotate(180 1.74316 31.342)"
              fill="#867f81"
            />
            <circle
              cx="1.74316"
              cy="1.74145"
              r="1.74121"
              transform="rotate(180 1.74316 1.74145)"
              fill="#867f81"
            />
          </svg>
        </span>
      
      </div>
      <Footer/>
   </>
       
     
  );
};

export default Page;
