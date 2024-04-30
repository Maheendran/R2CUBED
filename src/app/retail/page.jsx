import React from "react";
import NewNav from "../components/newNavb/NewNav";
import Footer from "../components/footer/Footer";

const page = () => {
  return (
    <>
  <NewNav/>
    <div className="w-full h-[93vh] mx-auto relative bg-[#f6f6f7]">
    <img src="/retail.png" className="w-full absolute top-0 right-0 bottom-0 left-0 m-auto  h-full" alt="" />

      <img src="/retail.png" className="w-full absolute top-0 right-0 bottom-0 left-0 m-auto  h-full" alt="" />
      </div>
      <p className="text-[2rem] text-center font-semibold">
        R2Cube’s Data Science Offering in the Retail Sector
      </p>

      <div className="flex justify-between  w-[90%] mx-auto my-[2rem] h-fit gap-[2rem]">
        <div className="w-[28%] h-full  text-center text-[0.9rem]">
          <img className="h-[40vh] w-[80%] mx-auto " src="/14.png" alt="" />
          <div className=" my-2  w-full py-3 text-[1rem]  bg-black text-center text-white">
            <p>Marketing & Customer Analytics</p>
          </div>
          <p className="my-[1rem]">
            {" "}
            <span className="font-semibold   ">Segmentation</span> : Who are
            your customers ?
          </p>
          <p>Retention & Monetization</p>
          <p>Churn Prediction</p>
          <p>Lifetime value</p>
          <p>Buying Patterns</p>
          <p>Demographics & Geography</p>
          <p className="font-semibold my-[1rem]">
            Targeting what and when they are likely to buy
          </p>
          <p>
            Next product to buy , Market Basket Recommendation Systems : Cross
            sell and upsell Market Mix : Channel optimization (online and
            in-stores)
          </p>
        </div>
        <div className="w-[28%] h-full  text-center text-[0.9rem]">
          <img className="h-[60vh] w-full " src="/13.png" alt="" />
          <div className=" my-2  w-full py-3 text-[1rem] bg-black text-center text-white">
            <p>Brand Analytics</p>
          </div>

          <p className=" my-[1rem]">
            Perception, Sentiments & Feedback <br />
            Competition analysis based on reviews and ratings
          </p>
        </div>
        <div className="w-[28%] h-full  text-center text-[0.9rem]">
          <img className="h-[40vh] w-[80%] mx-auto" src="/15.png" alt="" />
          <div className=" my-2  w-full py-3 text-[1rem]  bg-black text-center text-white">
            <p>Sales / revenue Analytics</p>
          </div>

          <p>Trends, Seasonality, Forecasts and Revenue <br /> Optimization</p>
          <p>Deep drive into product categories, customer
segments, regions and channels <br />
Pricing Models & Elasticity</p>
        </div>
      </div>
  

    <div className="w-full h-screen mt-[2.8rem] relative">
        <p className="text-[1.7rem] w-[80%] mt-[2rem] mx-auto text-center tracking-[.15em]">
            "Leveraging   <span className="bg-black text-white p-2 ml-[0.2rem]">
            Technology Partners 
                </span>{" "}for Tracking KPIs and
Regular Dashboard Updates"</p>
        <img src="/17.png" className=" mx-auto w-[70%]  h-[80vh] " alt="" />
    </div>
    <Footer />
    </>
  );
};

export default page;
