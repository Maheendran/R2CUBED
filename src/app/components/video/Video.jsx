"use client";
import React, { useEffect, useRef, useState } from "react";

import { FaVolumeMute } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Video = () => {
  const [state, setState] = useState(true);

  const [videoOpen, setvideoOpen] = useState(false);
  const videoRef = useRef();

  const handleVideoToggle = () => {
    const video = videoRef.current;
    video.muted = !video.muted;
    setVideoPlaying(!videoPlaying)
  };

  const [videoPlaying, setVideoPlaying] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0.1,
  });
  useEffect(() => {

    if (inView) {
      // setVideoPlaying(true);
      if(videoRef.current){
        videoRef.current.play();
      }
    

    }
    if (!inView) {
      
      videoRef.current.pause();

    }
  }, [inView]);

  return (
    <div className="w-full mainbg  relative  ">
      <div className="w-full h-[13.5vh] "></div>
      <div className="w-full  h-[95.5vh]  relative flex  justify-center  m-auto" >
        <div
        ref={ref}
          className="m-auto     z-20 w-[89%] sm:w-[86%] h-[300px]
          overflow-hidden   rounded-[20px] md:h-[83vh] 
        "
        >
          <div className="  h-full w-full relative  ">
            <video
              ref={videoRef}
              initial={{ opacity: 0 }}
              src="/R2C1.mp4"
              loop
              muted
              className=" w-full mx-auto h-full video-banner  object-cover object-center"
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
              }}
            ></video>
  <div 
            onClick={handleVideoToggle}
            className={`cursor-pointer  absolute left-0 top-0 z-10 flex h-full w-full items-center justify-center bg-primary bg-opacity-90`}
          >
            {!videoPlaying && (
              <div className="absolute bg-black right-0 top-0 border border-gray-600 z-20 flex p-4  items-center justify-center rounded-full text-white  play_btn ">
                <span className="absolute flex  right-0 top-0 z-[-1] h-full w-full animate-ping rounded-full bg-green-300 bg-opacity-20 delay-300 duration-1000"></span>
                <FaVolumeMute size={"1rem"} className="m-auto" />
              </div>
            )}
          </div>

          </div>

        
        </div>

        {/* <div className="bg-red-300 w-full h-full"> */}
          <span className="  absolute left-0  top-0">
            <svg
              className="w-[10rem] h-[10rem] sm:w-[30rem] sm:h-[20rem]"
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
          <span className="absolute  bottom-0 right-[-2.5rem] z-10">
            <svg
              className=" w-[10rem] h-[10rem] sm:w-[30rem] sm:h-[20rem]"
          
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
        {/* </div> */}
      </div>
    </div>
  );
};

export default Video;
