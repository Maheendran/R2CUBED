"use client"
import React, { useEffect } from "react";

const Page = ({splineloading,loading,setFinalLoading}) => {
  useEffect(()=>{
    if(!splineloading && !loading){
      setFinalLoading(false)

    }
  },[splineloading,loading])
  return (
    <div className="w-full h-screen bg-black z-[10000000]  fixed flex justify-center ">
      <div className="w-[10rem] h-[10rem] z-[100] loadingcube p-3 border-gray-400 rounded-full absolute top-0 bottom-0 left-0 right-0 m-auto">
        <img className="w-full h-full  " src="./logo.png" alt="" />
      </div>
      <div className="w-[30%] h-fit border">
 <div className={`my-auto w-full  border z-[10] bg-white h-[2vh] rounded-3xl absolute top-0 bottom-[-10rem] 
       ${splineloading ? "left-[-100vw] initalLoading ":" finalLoading left-0"}`}></div>


      </div>
     
    </div>
  );
};

export default Page;
