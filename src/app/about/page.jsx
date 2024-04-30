import React from "react";
import NewNav from "../components/newNavb/NewNav";
import Footer from "../components/footer/Footer";

const Page = () => {
  return (
    <>
 
          <NewNav />
  
      <div className="w-full h-[81.5vh]   flex justify-between">
        <div className="w-[55%] h-full   flex justify-center">
          <div className="w-[100%] text-justify  relative h-[70%]  p-[3rem] text-black m-auto ">
            <div className=" flex flex-col gap-4">
              <p className="text-[1.4rem]  leading-[2.3rem]">
                <span className="bg-black text-white p-2 ml-[6rem]">
                  R2Cubed
                </span>{" "}
                has extensive experience in the manufacturing vertical,
                encompassing both discrete and continuous operations. Their
                expertise extends to automotive, warehousing, oil and gas,
                industrial gas production (CO2, O2, H2), food & beverage,
                industrial power plants, building management, and military
                applications
              </p>
            </div>
            
          </div>
        </div>
        <div className="w-[45%] h-[80%] my-auto  ">
          <img className="w-full h-full" src="/2.png" alt="" />
        </div> 
      </div>

      <div className="w-full h-[96vh]  relative  ">
      <p className="text-[1.5rem] text-center absolute left-0 right-0 ">
          Introducing our flagship product, 'Sensol' , also known as  
           <span className="bg-black text-white p-2 ml-2 ">  'Sensor to
          Solution'</span>
          
        </p>
        
        <div className="w-[60%]  h-full flex p-[3rem]">
  <div className="w-[90%] m-auto  text-justify z-10 text-[1.4rem]  leading-[2.3rem]  my-auto">
          <p>
            Sensol is a business process and methodology pioneered by 'r2Cubed'
            (R2C), a California, USA-based IIOT and Deep Tech Company. R2C
            empowers manufacturing industries to transition from Industry 1.0 to
            4.0 by automating their operations with IIOT sensors, Energy
            Management tools, Computer Vision systems, and deep tech tools such
            as ML, AI, AR, VR, etc. This enables businesses to achieve higher
            throughput, improved productivity, increased uptime, and reduced
            unplanned downtime.
          </p>
        </div>
        </div>
      

        <img
          src="/4.png"
          className="  absolute w-full right-0 top-0  h-[100%]"
          alt=""
        />
         <img
          src="/4.png"
          className="  absolute w-full right-0 top-0  h-[100%]"
          alt=""
        />
      </div>
      <Footer/>
    </>
  );
};

export default Page;
