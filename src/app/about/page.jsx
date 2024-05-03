import React from "react";
import NewNav from "../components/newNavb/NewNav";
import Footer from "../components/footer/Footer";

const Page = () => {
  return (
    <>
      <NewNav />
      <div className="w-full sm:h-[10vh] md:h-[20vh]"></div>
      {/*  */}
      <div
        className="w-fit h-fit
         text-[1.2rem] md:text-[1.5rem] sm:leading-[2.8rem] "
      >
        <div className="w-[90%] text-justify flex  flex-col-reverse  relative h-fit p-[1rem] md:p-[3rem] text-black m-auto ">
          <div className="mt-[1.5rem] sm:mt-0 flex flex-col md:w-[60%] gap-4 ">
            <p>
              <span className="bg-black text-white p-2 ml-[6rem]">R2Cubed</span>{" "}
              has extensive experience in the manufacturing vertical,
              encompassing both discrete and continuous operations. Their
              expertise extends to automotive, warehousing, oil and gas,
              industrial gas production (CO2, O2, H2), food & beverage,
              industrial power plants, building management, and military
              applications
            </p>
          </div>

          <div className=" w-full md:w-[40%] h-full my-auto xs:relative   md:absolute right-0 top-0 ">
            <img className="w-full h-full" src="/2.png" alt="" />
          </div>
        </div>
        {/* ===============second section=============== */}

        <p
          className=" w-[85%] md:w-fit  mx-auto 
      text-center "
        >
          Introducing our flagship product, 'Sensol' , also known as
          <span className="bg-black text-white p-2 ml-2 ">
            {" "}
            'Sensor to Solution'
          </span>
        </p>

        <div className="w-full  h-fit  relative mt-[1rem] md:mt-[3rem] px-[1rem] flex flex-col-reverse ">
          {/*  */}
          {/* bg-green-400 sm:bg-red-400 md:bg-blue-400 */}
          <div
            className="w-full md:w-[60%] 
       h-full flex md:p-[3rem] mb-[1.5rem] md:mb-0"
          >
            <div
              className="w-[90%] m-auto  text-justify z-10 
             my-auto"
            >
              <p className=" text-[1.28rem] md:text-[1.5rem]">
                Sensol is a business process and methodology pioneered by
                'r2Cubed' (R2C), a California, USA-based IIOT and Deep Tech
                Company. R2C empowers manufacturing industries to transition
                from Industry 1.0 to 4.0 by automating their operations with
                IIOT sensors, Energy Management tools, Computer Vision systems,
                and deep tech tools such as ML, AI, AR, VR, etc. This enables
                businesses to achieve higher throughput, improved productivity,
                increased uptime, and reduced unplanned downtime.
              </p>
            </div>
          </div>
          <div
            className="relative   h-[40vh]  md:absolute w-full
 right-0 top-0  md:h-[100%]"
          >
            <img
              src="/4.png"
              className="absolute w-full right-0 top-0  h-[100%]"
              alt=""
            />
            <img
              src="/4.png"
              className="  absolute w-full right-0 top-0  h-[100%]"
              alt=""
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
