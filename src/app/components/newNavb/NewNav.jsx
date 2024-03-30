"use client";
import React from "react";
import Link from 'next/link'
const NewNav = () => {

  return (
    <div
   
      className=" flex justify-between w-full h-[8.5vh] 
      
       navbg"
    >
      <div className="   w-[3.3rem] h-[8vh]    px-2">
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
        className=" w-fit cursor-pointer h-full bg-black   relative flex justify-center gap-2 z-[1000]"
    
      >


        <div className=" menubtn text-white  my-auto overflow-hidden  flex justify-center   h-full  z-[1000]">
          <p className="my-auto bg-black ">Menu</p>
          <div className="my-auto bg-black">
            <svg
              className="subesvg"
              color="red"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path d="M20,10.35,14.22,2.94A3.06,3.06,0,0,0,9.75,3L4,10.35A3.05,3.05,0,0,0,3.51,12,3.09,3.09,0,0,0,4,13.58l.06.07,5.74,7.41A3,3,0,0,0,12,22a3.06,3.06,0,0,0,2.26-1L20,13.65a3,3,0,0,0-.06-3.3Zm-1.57,2.14-5.67,7.22a1.11,1.11,0,0,1-1.42.07L5.65,12.47A1,1,0,0,1,5.51,12a1.11,1.11,0,0,1,.1-.45l5.67-7.22a1.11,1.11,0,0,1,1.42-.07l5.63,7.28a1,1,0,0,1,.16.54A1.11,1.11,0,0,1,18.39,12.49Z" />
            </svg>
          </div>

           <div id="" className=" menuOne flex gap-3 absolute    top-0 bottom-0 my-auto w-[30vw] z-[-100]">
          <p className="my-auto menuNav text-[0.9rem]">Service</p>
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
