import React from "react";
import NewNav from "../components/newNavb/NewNav";
import Link from 'next/link'
import Footer from "../components/footer/Footer";
import Circle from "../components/circle/Circle";
const Page = () => {
  return (
    <>
      <NewNav />

      <div className="w-full h-[91.5vh]  relative  ">
      

        <div className="w-[55%] h-full flex p-[3rem]">
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

        <img
          src="/6.png"
          className=" absolute w-[70%] right-0 top-0  h-full"
          alt=""
        />
          <img
          src="/6.png"
          className=" absolute w-[70%] right-0 top-0  h-full"
          alt=""
        />
<Link href="/enquiry">
<button class="button2 absolute left-[25%]  bottom-[6rem] w-fit mx-auto">Book A Demo</button>

</Link>

      </div>
      {/* =========== */}

      <div className="w-full h-[50vh] text-white  bg-black flex justify-around">
    
    
      <div className="w-[20%] h-[50%] my-auto  flex flex-col">
  
  <div className="h-[30%]  mb-[1.5rem]">
          <p className="text-[2rem] font-semibold">15%</p>

          </div>
          <p className="text-[1.5rem]">Increase in OEE</p>
       
      </div>


      <div className="w-[20%] h-[50%] my-auto  flex flex-col">
  
  <div className="h-[30%]  mb-[1.5rem]">
          <p className="text-[2rem] font-semibold">12%</p>

          </div>
          <p className="text-[1.5rem]">Increase in Total Production Efficiency</p>
       
      </div>

    

      <div className="w-[20%] h-[50%] my-auto  flex flex-col">
  
  <div className="h-[30%]  mb-[1.5rem]">
          <p className="text-[2rem] font-semibold">54%</p>

          </div>
          <p className="text-[1.5rem]">Increase in Equipment Uptime</p>
       
      </div>


      </div>
      {/* =========== */}
      <div className="w-full h-[100vh]  relative  ">
  
        <div className="w-[70%] relative  h-full flex">
          <div className="w-[60%] h-fit absolute top-[2rem] right-0 bottom-0 left-0   m-auto text-justify z-10 text-[1.5rem]  leading-[2.3rem]  my-auto">
        
            <p>
            
             
              Whether a facility is at Industry 1.0 or
Industry 4.0 level, R2Cube's Industrial
Metaverse offerings will 
<span className="bg-black text-white p-2 ml-[0.7rem]">
'sensorize'
              </span>{" "} the
entire operation. It analyzes real-time data
from multiple sensor streams, correlates
values to understand their impact on the
operation, performs trend analysis on each
signal, and detects anomalies. With
assistance from Subject Matter Experts, it
maps the root cause of historical failures
and creates causal inference solutions on
the fly.
            </p>
          </div>
        </div>
  <img
          src="/8.png"
          className="absolute w-[42%] h-[70%] z-50 right-0 bottom-0  my-auto"
          alt=""
        />
        <img
          src="/8.png"
          className="absolute w-[42%] h-[70%] z-50 right-0 bottom-0 my-auto"
          alt=""
        />
      </div>
      {/* =========== */}
      <div className="w-full bg-black text-white h-fit flex flex-col  relative  text-[1.5rem] p-[3rem]">
  
  <p>The end result is early detection of potential failures, allowing for planned maintenance
windows ahead of unplanned downtime. This leads to:</p>
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
<Circle/>
<p>
This comprehensive solution includes IIOT solutions, Energy Management solutions, Machine Vision
Solutions, and utilizes ML, AI, and various levels of Manufacturing Metaverse features.
</p>

<img className="absolute right-0 top-0 bottom-0 my-auto w-[40%]  h-[50vh]" src="/10.png" alt="" />

</div>

<Footer/>
    </>
  );
};

export default Page;
