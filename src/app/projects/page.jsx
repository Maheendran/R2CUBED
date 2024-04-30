import React from "react";
import NewNav from "../components/newNavb/NewNav";
import Footer from "../components/footer/Footer";

const Page = () => {
  return (
    <>
      <NewNav />
      <div className="w-full h-[91.5vh] bg-black  flex justify-between">
        <div className="w-[50%] h-full   flex justify-center">
          <div className="w-[85%]   relative h-[70%] border border-r-0 border-t-0 border-b-0 p-[3rem] text-white m-auto ">
            <div className=" flex flex-col gap-4">
              <p className="text-[3rem] mt-5">PROJECTS </p>
              <p className="text-[1.2rem]">
                R2CUBED is visionary in all its senses. We build
                state-of-the-art solutions leveraging the foundational
                principles of AI and Surveillance that can be tailored to your
                frame of reference
              </p>
            </div>
            {/* ===side box */}
            <div className="h-[15vh] w-[7px] bg-white absolute top-[20%] left-[-0.25rem] rounded-md"></div>
          </div>
        </div>
        <div className="w-[40%] h-full ">
          <img className="w-full h-full" src="/DIS.png" alt="" />
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Page;
