import React from "react";

const Page = () => {
  return (
    <div className="w-full h-screen mainbg ">
      <div className="w-[85%] h-[90vh] mx-auto flex flex-col justify-between ">
        <div className="w-full  flex justify-between">
          <input
            type="text"
            placeholder="First Name"
            className="p-4 mb-3 w-[45%] text-[4rem] bg-black text-white border-0 border-b-2"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="p-4 mb-3 w-[45%] text-[4rem] bg-black text-white border-0 border-b-2"
          />
        </div>

        <div className="w-full flex justify-between">
          <input
            type="text"
            placeholder="Email"
            className="p-4 mb-3 w-[45%] text-[4rem] bg-black text-white border-0 border-b-2"
          />
          <input
            type="text"
            placeholder="Phone"
            className="p-4 mb-3 w-[45%] text-[4rem] bg-black text-white border-0 border-b-2"
          />
        </div>

        <div className="w-full">
          <input
            type="text"
            placeholder="Country"
            className="p-4 mb-3 w-full text-[4rem] bg-black text-white border-0 border-b-2"
          />
        </div>
      </div>
      <div className="flex justify-center w-[10rem] h-[10rem] border rounded-full absolute bottom-[1rem] right-[1rem] bg-white">
        <p className="m-auto text-[2rem] cursor-pointer">Send</p>
      </div>
    </div>
  );
};

export default Page;
