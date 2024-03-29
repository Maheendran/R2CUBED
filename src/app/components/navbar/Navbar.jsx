"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Application } from "@splinetool/runtime";

const Navbar = () => {
  const [enlarge, setEnlarge] = useState(true);
  const navbarRef = useRef(null);
  const NavCanvasRef = useRef(null);


  useEffect(() => {
    // Ensure NavCanvasRef is not null before accessing its current property
    const newCanvas = NavCanvasRef.current;
    if (!newCanvas) return;

    const splines = new Application(newCanvas);

    splines
      .load("https://prod.spline.design/ThZV623jazw2LSZ1/scene.splinecode")
      .then(() => {
        console.log('Scene loaded successfully');
      })
      .catch((error) => {
        console.error("Error loading scene:", error);
      });

    return () => {
      // Clean up resources if needed
    };
  }, [NavCanvasRef]); 
//   ======================
  const handleEnlarge = () => {
    setEnlarge(!enlarge);

    gsap.registerPlugin(ScrollTrigger);

 gsap.to(navbarRef.current, {
        height: "100vh",
        duration: 0.4,
        ease: "power1.out",
      })
      gsap.to("#menuOne",{
duration:4,
        x: 600,
      })

    }
  const handleSmall = () => {
    setEnlarge(!enlarge);

    gsap.registerPlugin(ScrollTrigger);

    gsap.to(navbarRef.current, {
      height: "8.5vh",
      duration: 0.4,
      ease: "power1.out",
    });
  };
  return (
    <div
      id="navbar"
      ref={navbarRef}
      className={`flex justify-between w-full h-[8.5vh]  ${
        enlarge ? "enlargescreen" : "smscreen"
      }  navbg`}
    >
      <div className=" w-[3rem] h-[3.5rem]  relative my-auto px-2">
        <img
          id="logo"
          className="absolute top-[-3rem] w-full h-full py-[2px]"
          src="./logo.png"
          alt=""
        />
      </div>
      {enlarge ? (
        <p
          onClick={handleEnlarge}
          className="cursor-pointer my-auto px-2 absolute right-0 top-[1rem] flex gap-1"
        >
          menu
          <span className="my-auto">
          <svg className="subesvg" color="red" viewBox="0 0 24 24" fill="none" >
          <path d="M20,10.35,14.22,2.94A3.06,3.06,0,0,0,9.75,3L4,10.35A3.05,3.05,0,0,0,3.51,12,3.09,3.09,0,0,0,4,13.58l.06.07,5.74,7.41A3,3,0,0,0,12,22a3.06,3.06,0,0,0,2.26-1L20,13.65a3,3,0,0,0-.06-3.3Zm-1.57,2.14-5.67,7.22a1.11,1.11,0,0,1-1.42.07L5.65,12.47A1,1,0,0,1,5.51,12a1.11,1.11,0,0,1,.1-.45l5.67-7.22a1.11,1.11,0,0,1,1.42-.07l5.63,7.28a1,1,0,0,1,.16.54A1.11,1.11,0,0,1,18.39,12.49Z"/>
</svg>
          </span>
        </p>
      ) : (
        <p onClick={handleSmall} className=" cursor-pointer my-auto px-2 absolute right-0 top-[1rem] flex justify-center gap-2">
          close
          <span className="m-auto mt-1">
          <svg className="subesvg m-auto" color="red" viewBox="0 0 24 24" fill="none"  >
          <path d='M7.314 5.9l3.535-3.536A1 1 0 1 0 9.435.95L5.899 4.485 2.364.95A1 1 0 1 0 .95 2.364l3.535 3.535L.95 9.435a1 1 0 1 0 1.414 1.414l3.535-3.535 3.536 3.535a1 1 0 1 0 1.414-1.414L7.314 5.899z' />
</svg>
          </span>
        </p>
      )}



   {!enlarge &&   
   <div >
       <div className="w-fit h-fit my-auto  absolute top-0 bottom-0 left-[2rem]">
        <div id="menuOne" className="w-fit h-fit  relative textbganimate">
          <p className="text-[4.5rem] text-white font-bold">Services</p>

          <div className="absolute underline w-[0.01px] rounded-lg left-0 right-0 mx-auto h-[5px] bg-white"></div>
        </div>

        <div  id="menuTwo" className="w-fit h-fit  relative textbganimate">
          <p className="text-[4.5rem] text-white font-bold ">About </p>

          <div className="absolute underline w-[0.01px] rounded-lg left-0 right-0 mx-auto h-[5px] bg-white"></div>
        </div>
        <div  id="menuTwo" className="w-fit h-fit  relative textbganimate">
          <p className="text-[4.5rem] text-white font-bold ">Our projects </p>

          <div className="absolute underline w-[0.01px] rounded-lg left-0 right-0 mx-auto h-[5px] bg-white"></div>
        </div>
        <div  id="menuTwo" className="w-fit h-fit  relative textbganimate">
          <p className="text-[4.5rem] text-white font-bold ">Contact us </p>

          <div className="absolute underline w-[0.01px] rounded-lg left-0 right-0 mx-auto h-[5px] bg-white"></div>
        </div>
      </div>
      {/* ================ */}
   <div className=" ">
                 <canvas ref={NavCanvasRef} ></canvas>
               </div>
   </div>

      }
    </div>
  );
};

export default Navbar;
