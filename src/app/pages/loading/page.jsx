import React from "react";

const Page = () => {
  return (
    <div className="w-full h-screen bg-black z-[10000000]  fixed  ">
      <div className="w-[10rem] h-[11rem] loadingcube p-3 border-gray-400 rounded-full absolute top-0 bottom-0 left-0 right-0 m-auto">
        <img className="w-full h-full " src="./logo.png" alt="" />
      </div>
    </div>
  );
};

export default Page;
