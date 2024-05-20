import React from "react";
import NewNav from "../components/newNavb/NewNav";
import Link from "next/link";
import Footer from "../components/footer/Footer";
import Circle from "../components/circle/Circle";
const Page = () => {
  return (
    <>
      <NewNav />
      {/* bg-red-200 sm:bg-green-300 md:bg-blue-300 */}
      <div  className="w-full h-[36vh] md:h-[91.5vh]  relative  "
      >
        <div className="hidden md:black w-[60%] md:w-[55%] h-full md:flex p-[3rem]">
          <div className="w-full text-justify z-10 text-[1.5rem]  leading-[2.3rem]  my-auto">
            <p>
              R2Cube's
              <span className="bg-black text-white p-2 ml-[0.5rem]">
                'SENSOL'
              </span>{" "}
              is an end-to-end solution designed to significantly enhance uptime
              and productivity in any factory or manufacturing operation, be it
              discrete or continuous.
            </p>
          </div>
        </div>

        <div className="absolute w-[70%] right-0 top-0  h-full">
          <img
            src="/6.png"
            className=" absolute w-full right-0 top-0  h-full"
            alt=""
          />
          <img
            src="/6.png"
            className=" absolute w-full right-0 top-0  h-full"
            alt=""
          />
        </div>

        <Link href="/enquiry">
          <button
            class="button2 
          absolute md:left-[25%]  md:bottom-[6rem] w-fit h-fit 
          left-[10%] bottom-[43%] my-auto
          "
          >
            Book A Demo
          </button>
        </Link>
      </div>
      <div
        className="black w-[full] md:hidden 
            h-fit flex p-[1.5rem]"
      >
        <div className="w-full text-justify z-10 text-[1.2rem]  leading-[2.3rem]  my-auto">
          <p>
            R2Cube's
            <span className="bg-black text-white p-2 ml-[0.5rem]">
              'SENSOL'
            </span>{" "}
            is an end-to-end solution designed to significantly enhance uptime
            and productivity in any factory or manufacturing operation, be it
            discrete or continuous.
          </p>
        </div>
      </div>
      {/* =========== */}

      <div className="w-full h-fit md:h-[50vh] text-white  bg-black
       flex flex-col gap-[3rem] md:gap-[0rem] md:flex-row justify-around relative p-[2rem] md:p-0">
    
        <div className="w-[80%]  text-center md:text-start mx-auto md:w-[20%]  h-fit  md:h-[50%] my-auto  flex flex-col">
          <div className="h-[30%]   mb-[1.5rem]">
            <p className="text-[2rem] font-semibold">15%</p>
          </div>
          <p className="text-[1.5rem]">Increase in OEE</p>
        </div>

        <div className="w-[80%]  text-center md:text-start  mx-auto md:w-[20%]     h-fit my-auto  flex flex-col">
          <div className="h-[30%]  mb-[1.5rem]">
            <p className="text-[2rem] font-semibold">12%</p>
          </div>
          <p className="text-[1.5rem]">
            Increase in Total Production Efficiency
          </p>
        </div>

        <div className="w-[80%]  text-center md:text-start mx-auto md:w-[20%]    h-fit  my-auto  flex flex-col">
          <div className="h-[30%]  mb-[1.5rem]">
            <p className="text-[2rem] font-semibold">54%</p>
          </div>
          <p className="text-[1.5rem]">Increase in Equipment Uptime</p>
        </div>

      </div>
      {/* =========== */}

      <div className="w-full   md:h-[100vh]  relative flex flex-col-reverse gap-[2rem] md:gap-0  ">
        
        <div className=" md:w-[70%] relative  h-full flex">
          <div className="w-[90%] md:w-[60%] h-fit md:absolute top-[2rem] right-0 bottom-0 left-0 
            m-auto text-justify z-10  text-[1.5rem]  leading-[2.3rem]  my-auto">
            <p>
              Whether a facility is at Industry 1.0 or Industry 4.0 level,
              R2Cube's Industrial Metaverse offerings will
              <span className="bg-black text-white p-2 ml-[0.7rem]">
                'sensorize'
              </span>{" "}
              the entire operation. It analyzes real-time data from multiple
              sensor streams, correlates values to understand their impact on
              the operation, performs trend analysis on each signal, and detects
              anomalies. With assistance from Subject Matter Experts, it maps
              the root cause of historical failures and creates causal inference
              solutions on the fly.
            </p>
          </div>
        </div>
      
      <div className=" relative md:absolute
       w-full h-[50vh] md:w-[42%] md:h-[70%] z-50 right-0 bottom-0  my-auto">
        <img
          src="/8.png"
          className="absolute w-full h-full z-50 right-0 bottom-0  my-auto"
          alt=""
        />
        <img
          src="/8.png"
          className="absolute w-full h-full z-50 right-0 bottom-0 my-auto"
          alt=""
        />
      </div>
        
      </div>

      {/* =========== */}
      <div className="w-full bg-black text-white h-fit flex flex-col  relative text-[1.5rem] p-[1.5rem] md:p-[3rem]">
        <p className="text-justify">
          The end result is early detection of potential failures, allowing for
          planned maintenance windows ahead of unplanned downtime. This leads
          to:
        </p>
       <div className=" flex justify-center overflow-hidden">
           <Circle />
       </div>
     
        <p>
          This comprehensive solution includes IIOT solutions, Energy Management
          solutions, Machine Vision Solutions, and utilizes ML, AI, and various
          levels of Manufacturing Metaverse features.
        </p>

      </div>

      <Footer />
    </>
  );
};

export default Page;
 {/* <div className="mx-auto   my-[2rem]">
    <ul className="flex flex-col gap-[1.8rem] manufact_ul  font-semibold">
    <li>Boosted Productivity
</li>
<li>Reduced Downtime</li>
<li>Optimized Processes</li>
<li>Improved Quality</li>
<li>Easier Upskilling of the Workforce</li>
<li>
Simplified Compliance</li>
</ul>
</div> */}