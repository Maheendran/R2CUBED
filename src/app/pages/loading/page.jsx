"use client"
import React, { useEffect } from "react";

const Page = ({splineloading,loading,setFinalLoading}) => {
  useEffect(()=>{
    if(!splineloading && !loading){
      setFinalLoading(false)

    }
  },[splineloading,loading])
  return (
    <div className="w-full h-screen bg-black z-[10000000]  fixed flex flex-col justify-center ">
      <div className="w-[10rem] h-[10rem] z-[100] loadingcube p-3 border-gray-400 rounded-full  mx-auto">
        <img className="w-full h-full  " src="./logo.png" alt="" />
      </div>
      <div className="w-[30%] h-[10vh] mx-auto relative  overflow-hidden">
 <div className={`my-auto w-full  z-[10] bg-white h-[1.5vh] rounded-3xl absolute top-0 bottom-0 
       ${splineloading ? "left-[-30vw] initalLoading ":" finalLoading left-0"}`}></div>


      </div>
     
    </div>
  );
};

export default Page;
