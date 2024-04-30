"use client";
import React, { useEffect, useRef, useState } from "react";

import { FaPlay } from "react-icons/fa";
import NewNav from "../components/newNavb/NewNav";

const Page = () => {
  const [state, setState] = useState(true);



  const [videoOpen, setvideoOpen] = useState(false);
  const videoRef = useRef();

  const handleVideoToggle = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
      setVideoPlaying(true);
    } else {
      video.pause();
      setVideoPlaying(false);
    }
  };

  const [videoPlaying, setVideoPlaying] = useState(false);
  return (
    
   
   <>
   <NewNav/>
    <div className="w-100  mainbg h-[91.5vh] relative overflow-hidden">

            <div
              className="m-auto  mt-[2rem]    z-20 w-[88%] sm:w-[85%] h-[300px]
          overflow-hidden   rounded-[20px] md:h-[84vh] 
          absolute right-0 top-0 bottom-0 left-0"
            >
              <div className="  h-full w-full  ">
                <video
                  ref={videoRef}
                  initial={{ opacity: 0 }}
                  src="/video1.mp4"
                  loop
                  muted
                  className="w-full mx-auto h-full video-banner  object-cover object-center"
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                    scale: 1.3,
                  }}
                ></video>
              </div>

              <div
                onClick={handleVideoToggle}
                className={`absolute left-0 top-0 z-10 flex h-full w-full items-center justify-center bg-primary bg-opacity-90`}
              >
                {!videoPlaying && (
                  <div className="absolute z-20 flex p-4  items-center justify-center rounded-full text-white  play_btn h-[6rem] w-[6rem]">
                    <span className="absolute flex  right-0 top-0 z-[-1] h-full w-full animate-ping rounded-full bg-green-300 bg-opacity-20 delay-300 duration-1000"></span>
                    <FaPlay size={"3rem"} className="m-auto" />
                  </div>
                )}
              </div>
            </div>

       
            <div className="w-fit h-fit ">
              <span className="  absolute left-0 sm:left-[-3.5rem] top-0">
                <svg
                  className="w-[10rem] h-[10rem] sm:w-[30rem] sm:h-[20rem]"
                  viewBox="0 0 50 79"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
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
              <span className="absolute  sm:bottom-[2rem] right-[-5vw] z-10">
                <svg
                  className="w-[10rem] h-[10rem] sm:w-[30rem] sm:h-[20rem]"
                  // width="50"
                  // height="79"
                  viewBox="0 0 50 79"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
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
          </div>
   </>
       
     
  );
};

export default Page;
