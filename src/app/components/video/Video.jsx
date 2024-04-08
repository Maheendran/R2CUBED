"use client";
import React, { useEffect, useRef, useState } from "react";

import { FaPlay } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Video = () => {
  // const [state, setState] = useState(true);

  // const [videoOpen, setvideoOpen] = useState(false);
  // const videoRef = useRef();

  // const [videoPlaying, setVideoPlaying] = useState(false);

  // const handleVideoToggle = () => {
  //   const video = videoRef.current;

  //   if (video.paused) {
  //     // video.play();
  //     setVideoPlaying(true);
  //   } else {
  //     // video.pause();
  //     setVideoPlaying(false);
  //   }
  // };

  // const { ref, inView } = useInView({
  //   threshold: 0.1,
  // });
  // useEffect(() => {

  //   if (inView) {
  //     // setVideoPlaying(true);
  //     if(videoRef.current){
  //       videoRef.current.play();
  //     }
    

  //     if(videoPlaying){
  //       setVideoPlaying(true);
  //     }
  //   }
  //   if (!inView) {
  //     // setVideoPlaying(false);
  //     videoRef.current.pause();
  //     if(videoPlaying){
  //       setVideoPlaying(false);
  //     }
  //   }
  // }, [inView]);


  // ========================
  const [autoPlay, setAutoPlay] = useState(false);
  const [muted, setMuted] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const videoElement = videoRef.current;
      const bounding = videoElement.getBoundingClientRect();
      const isInViewport = (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
      if (isInViewport) {
        setAutoPlay(true);
      } else {
        setAutoPlay(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMute = () => {
    setMuted(!muted);
  };

  const handleVideoClick = () => {
    setMuted(false);
  };

  return (
    <div className="w-full mainbg  relative">
      <div className="w-full h-[13.5vh] "></div>
      <div className="w-full  h-[95.5vh]  relative" >
        <div
        // ref={ref}
          className="m-auto  mt-[2rem]    z-20 w-[88%] sm:w-[85%] h-[300px]
          overflow-hidden   rounded-[20px] md:h-[85vh] 
          absolute right-0 top-0 bottom-0 left-0"
        >
          <div className="  h-full w-full  ">
            {/* <video
              ref={videoRef}
              initial={{ opacity: 0 }}
              src="/R2C1.mp4"
              loop
              muted={videoPlaying}
              className=" w-full mx-auto h-full video-banner  object-cover object-center"
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
              }}
            ></video> */}
            <video
        ref={videoRef}
        autoPlay={autoPlay}
        muted={muted}
        controls
        style={{ width: '100%' }}
        onClick={handleVideoClick}
      >
        <source src="/R2C1.mp4" type="video/mp4" />

      </video>
      <button onClick={toggleMute}>{muted ? 'Unmute' : 'Mute'}</button>
          </div>

          <div 
            // onClick={handleVideoToggle}
            className={`cursor-pointer absolute left-0 top-0 z-10 flex h-full w-full items-center justify-center bg-primary bg-opacity-90`}
          >
            {/* {!videoPlaying && (
              <div className="absolute z-20 flex p-4  items-center justify-center rounded-full text-white  play_btn h-[6rem] w-[6rem]">
                <span className="absolute flex  right-0 top-0 z-[-1] h-full w-full animate-ping rounded-full bg-green-300 bg-opacity-20 delay-300 duration-1000"></span>
                <FaPlay size={"3rem"} className="m-auto" />
              </div>
            )} */}
          </div>
        </div>

        <div>
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
    </div>
  );
};

export default Video;
