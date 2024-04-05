"use client";
import React from "react";
import Link from 'next/link'
const NewNav = () => {

  return (
    <div
    // 
      className=" flex justify-between w-full h-[8.5vh]
      navbg
       "
    >
      <div className="   w-[3.5rem] h-[8vh]    px-2">
        <Link href="/">
        <img
          id="logo"
          className=" w-full h-full  py-[2px]"
          src="./logo.png"
          alt=""
        />
        </Link>
      
      </div>

      {/* ================ */}

      <div
        className=" w-fit cursor-pointer h-full  relative flex justify-center gap-2 z-[1000]"
    
      >


        <div className=" menubtn text-white bg-black  my-auto overflow-hidden  flex justify-center   h-full  z-[1000]">
        
          <div className="my-auto">
            {/* <svg
              className="subesvg"
              color="red"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path d="M20,10.35,14.22,2.94A3.06,3.06,0,0,0,9.75,3L4,10.35A3.05,3.05,0,0,0,3.51,12,3.09,3.09,0,0,0,4,13.58l.06.07,5.74,7.41A3,3,0,0,0,12,22a3.06,3.06,0,0,0,2.26-1L20,13.65a3,3,0,0,0-.06-3.3Zm-1.57,2.14-5.67,7.22a1.11,1.11,0,0,1-1.42.07L5.65,12.47A1,1,0,0,1,5.51,12a1.11,1.11,0,0,1,.1-.45l5.67-7.22a1.11,1.11,0,0,1,1.42-.07l5.63,7.28a1,1,0,0,1,.16.54A1.11,1.11,0,0,1,18.39,12.49Z" />
            </svg> */}

<svg   className="subesvg  bg-black" viewBox="0 0 24 24" fill="none" >
<path className="dotone" d="M13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6C12.5523 6 13 5.55228 13 5Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path className="dottwo" d="M13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12Z"stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path  className="dotthree" d="M13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
          </div>

           <div id="" className=" menuOne flex gap-3 absolute    top-0 bottom-0 my-auto w-[24vw] z-[-100]">
          <p className="my-auto menuNav text-[0.9rem]">Home</p>
          <p className="my-auto menuNav text-[0.9rem]">About</p>
          <p className="my-auto menuNav text-[0.9rem]">projects</p>
          <p className="my-auto menuNav text-[0.9rem]">Contact us</p>
        </div>
        </div>

       
      </div>
    </div>
  );
};

export default NewNav;
