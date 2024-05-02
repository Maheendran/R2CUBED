"use client";
import React, { useRef, useState } from "react";
import NewNav from "../components/newNavb/NewNav";
import emailjs from "@emailjs/browser";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
const Page = () => {
  const form = useRef();
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedServiceValue, setSelectedServicesValue] = useState("");
  const [solutionsValue, setSolutionsValue] = useState("");
  const [budgetValue, setBudgetValue] = useState("");
  const [discriptionValue, setDiscriptionValue] = useState("");
  const [messagesent, setMessageSent] = useState(false);
  const [warning, setWarning] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    setMessageSent(true);


    if(!selectedValue || !selectedServiceValue|| !solutionsValue ||
      !discriptionValue ){
         setMessageSent(false);
          setWarning(true)
          return setTimeout(()=>{
            setWarning(false)
          },2000)
      }

    const formData = new FormData(form.current);
  
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
    if(!data.country || ! data.email_id ||!data.from_name || !data.mobile){
     
    
     setMessageSent(false);
     setWarning(true)
     return setTimeout(()=>{
       setWarning(false)
     },2000)
      }
    


    console.log(data,'formDataformData')

    const dummyForm = document.createElement("form");

    // Populate the form with data
    Object.keys(data).forEach((key) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = key;
      input.value = data[key];
      dummyForm.appendChild(input);
    });

    form.current.appendChild(dummyForm);

    // data["industry"] = selectedValue;
    // data["services"] = selectedServiceValue;
    // data["solutions"] = solutionsValue;
    // data["budget"] = budgetValue;
    // data["description"] = discriptionValue;

    emailjs
      .sendForm(
        "service_f7oqhwa",
        "template_y7fvw7q",
        form.current,
        "sF9ZqI5aNSsi0f5Iw"
      )
      .then(
        (result) => {
          setMessageSent(false);
          
        },
        (error) => {
          setMessageSent(false);
          console.log(error.text);
        }
      );
     
  };

  // ===================

  // Function to handle radio button change
  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
    console.log(event.target.value);
  };
  const handleServiesChange = (e) => {
    setSelectedServicesValue(e.target.value);
  };

  const handleSolutionChange = (e) => {
    setSolutionsValue(e.target.value);
  };
  const handleBudgetChange = (e) => {
    setBudgetValue(e.target.value);
  };

  const handleDiscriptionChange = (e) => {
    setDiscriptionValue(e.target.value);
  };
  return (
    <div className="bg-black">
      <NewNav />
  
      <form ref={form} onSubmit={sendEmail} className="bg-black">
     
        <div className="w-[40%] mx-auto px-[2rem] h-fit text-white ">
          <div >
          <p className="text-[2.5rem] mb-[2rem] bg-black text-white  ">What are you searching for ?</p>

            <p className="text-[1.7rem]">
              Identify Your Industry
              <span className="text-red-600 text-[1.4rem] ml-1">*</span>
            </p>
            <div className="flex mt-2 text-[1.5rem] gap-2">
              <input
                className="w-[1.3rem] h-[1.3rem] my-auto"
                type="radio"
                name="industry"
                value="Manufacturing : Discrete"
                checked={selectedValue === "Manufacturing : Discrete"}
                onChange={handleRadioChange}
              />
              <p className="my-auto text-[1.2rem]">Manufacturing : Discrete</p>
            </div>
            <div className="flex mt-2 text-[1.5rem] gap-2">
              <input
                className="w-[1.3rem] h-[1.3rem] my-auto"
                type="radio"
                name="industry"
                value="Manufacturing : Process"
                checked={selectedValue === "Manufacturing : Process"}
                onChange={handleRadioChange}
              />
              <p className="my-auto text-[1.2rem]">Manufacturing : Process</p>
            </div>
            <div className="flex mt-2 text-[1.5rem] gap-2">
              <input
                className="w-[1.3rem] h-[1.3rem] my-auto"
                type="radio"
                name="industry"
                value="Oil & Gas"
                checked={selectedValue === "Oil & Gas"}
                onChange={handleRadioChange}
              />
              <p className="my-auto text-[1.2rem]">Oil & Gas</p>
            </div>
            <div className="flex mt-2 text-[1.5rem] gap-2">
              <input
                className="w-[1.3rem] h-[1.3rem] my-auto"
                type="radio"
                name="industry"
                value="Gas Plant (Oxygen, Hydrogen, Nitrogen, CO2)"
                checked={
                  selectedValue ===
                  "Gas Plant (Oxygen, Hydrogen, Nitrogen, CO2)"
                }
                onChange={handleRadioChange}
              />
              <p className="my-auto text-[1.2rem]">
                Gas Plant (Oxygen, Hydrogen, Nitrogen, CO2)
              </p>
            </div>
            <div className="flex mt-2 text-[1.5rem] gap-2">
              <input
                className="w-[1.3rem] h-[1.3rem] my-auto"
                type="radio"
                name="industry"
                value="Food & Beverage"
                checked={selectedValue === "Food & Beverage"}
                onChange={handleRadioChange}
              />
              <p className="my-auto text-[1.2rem]">Food & Beverage</p>
            </div>
            <div className="flex mt-2 text-[1.5rem] gap-2">
              <input
                className="w-[1.3rem] h-[1.3rem] my-auto"
                type="radio"
                name="industry"
                value="Power Sector"
                checked={selectedValue === "Power Sector"}
                onChange={handleRadioChange}
              />
              <p className="my-auto text-[1.2rem]">Power Sector</p>
            </div>
            <div className="flex mt-2 text-[1.5rem] gap-2">
              <input
                className="w-[1.3rem] h-[1.3rem] my-auto"
                type="radio"
                name="industry"
                value="Military"
                checked={selectedValue === "Military"}
                onChange={handleRadioChange}
              />
              <p className="my-auto text-[1.2rem]">Military</p>
            </div>
            <div className="flex mt-2 text-[1.5rem] gap-2">
              <input
                className="w-[1.3rem] h-[1.3rem] my-auto"
                type="radio"
                name="industry"
                value="Automotive"
                checked={selectedValue === "Automotive"}
                onChange={handleRadioChange}
              />
              <p className="my-auto text-[1.2rem]">Automotive</p>
            </div>
            <div className="flex mt-2 text-[1.5rem] gap-2">
              <input
                className="w-[1.3rem] h-[1.3rem] my-auto"
                type="radio"
                name="industry"
                value="Building Managemengt"
                checked={selectedValue === "Building Managemengt"}
                onChange={handleRadioChange}
              />
              <p className="my-auto text-[1.2rem]">Building Managemengt</p>
            </div>
          </div>
          {/* ]]]]]]]]]second form]]]]]]]]]]]] */}
          <div>
            <p className="text-[1.7rem] mt-[2rem]">
              What are you looking for ?
              <span className="text-red-600 text-[1.4rem] ml-1">*</span>
            </p>
            <div className="flex mt-2 text-[1.5rem] gap-2">
              <input
                className="w-[1.3rem] h-[1.3rem] my-auto"
                type="radio"
                name="services"
                value="Improved Uptime / Productivity"
                checked={
                  selectedServiceValue === "Improved Uptime / Productivity"
                }
                onChange={handleServiesChange}
              />
              <p className="my-auto text-[1.2rem]">
                Improved Uptime / Productivity
              </p>
            </div>

            <div className="flex mt-2 text-[1.5rem] gap-2">
              <input
                className="w-[1.3rem] h-[1.3rem] my-auto"
                type="radio"
                name="services"
                value="Reduced Downtime"
                checked={selectedServiceValue === "Reduced Downtime"}
                onChange={handleServiesChange}
              />
              <p className="my-auto text-[1.2rem]">Reduced Downtime</p>
            </div>
            <div className="flex mt-2 text-[1.5rem] gap-2">
              <input
                className="w-[1.3rem] h-[1.3rem] my-auto"
                type="radio"
                name="services"
                value="Data driven operational management"
                checked={
                  selectedServiceValue === "Data driven operational management"
                }
                onChange={handleServiesChange}
              />
              <p className="my-auto text-[1.2rem]">
                Data driven operational management
              </p>
            </div>
            <div className="flex mt-2 text-[1.5rem] gap-2">
              <input
                className="w-[1.3rem] h-[1.3rem] my-auto"
                type="radio"
                name="services"
                value="Process Simulation"
                checked={selectedServiceValue === "Process Simulation"}
                onChange={handleServiesChange}
              />
              <p className="my-auto text-[1.2rem]">Process Simulation</p>
            </div>
          </div>

          {/* =========third section */}

          <div>
            <p className="text-[1.7rem] mt-[2rem]">
              When do you need the solutions implemented?
              <span className="text-red-600 text-[1.4rem] ml-1">*</span>
            </p>
            <div className="flex mt-2 text-[1.5rem] gap-2">
              <input
                className="w-[1.3rem] h-[1.3rem] my-auto"
                type="radio"
                name="solutions"
                value="30-60 days"
                checked={solutionsValue === "30-60 days"}
                onChange={handleSolutionChange}
              />
              <p className="my-auto text-[1.2rem]">30-60 days</p>
            </div>

            <div className="flex mt-2 text-[1.5rem] gap-2">
              <input
                className="w-[1.3rem] h-[1.3rem] my-auto"
                type="radio"
                name="solutions"
                value="60-180 days"
                checked={solutionsValue === "60-180 days"}
                onChange={handleSolutionChange}
              />
              <p className="my-auto text-[1.2rem]">60-180 days</p>
            </div>
            <div className="flex mt-2 text-[1.5rem] gap-2">
              <input
                className="w-[1.3rem] h-[1.3rem] my-auto"
                type="radio"
                name="solutions"
                value="12 months"
                checked={solutionsValue === "12 months"}
                onChange={handleSolutionChange}
              />
              <p className="my-auto text-[1.2rem]">12 months</p>
            </div>
          </div>
          {/* =========fourth section = */}

          <div>
            <p className="text-[1.7rem] mt-[2rem]">Budget</p>
            <div className="flex mt-2 text-[1.5rem] gap-2">
              <input
                className="w-[1.3rem] h-[1.3rem] my-auto"
                type="radio"
                name="budget"
                value="Budgetted"
                checked={budgetValue === "Budgetted"}
                onChange={handleBudgetChange}
              />
              <p className="my-auto text-[1.2rem]">Budgetted</p>
            </div>

            <div className="flex mt-2 text-[1.5rem] gap-2">
              <input
                className="w-[1.3rem] h-[1.3rem] my-auto"
                type="radio"
                name="budget"
                value="Not in the Budget but need the solution"
                checked={
                  budgetValue === "Not in the Budget but need the solution"
                }
                onChange={handleBudgetChange}
              />
              <p className="my-auto text-[1.2rem]">
                Not in the Budget but need the solution
              </p>
            </div>
          </div>

          {/* ===== five section ===== */}
          <div>
            <p className="text-[1.7rem] mt-[2rem]">
              Write a short description of your problem statement and the
              expected solution
              <span className="text-red-600 text-[1.4rem] ml-1">*</span>
            </p>
            <div className="flex mt-2 text-[1.5rem] gap-2">
              <input
                className="w-[80%] h-[3rem] border-b-2 border-gray-500 text-white bg-black"
                type="text"
                name="description"
                placeholder="description"
                onChange={handleDiscriptionChange}
              />
            </div>
          </div>
        </div>
        {/* ========  contact ======== */}
        <div className="w-full h-fit  my-4 bg-black  flex  p-5 justify-center relative">
          <div className="w-[70%] h-fit  m-auto flex flex-col mt-2  mt-2-col ">
            <div className="w-full  flex mt-2 justify-between ">
              <input
                type="text"
                name="from_name"
                placeholder="Fullname"
                className="p-4 mb-3 w-[45%] text-[1.9rem] bg-black text-white border-0 border-b-2"
              />

<input
                type="text"
                name="email_id"
                placeholder="Email"
                className="p-4 mb-3 w-[45%] text-[1.9rem] bg-black text-white border-0 border-b-2"
              />
            </div>

            <div className="w-full flex justify-between ">
             
              <input
                type="text"
                name="mobile"
                placeholder="Phone"
                className="p-4 mb-3 w-[45%] text-[1.9rem] bg-black text-white border-0 border-b-2"
              />
               <input
                type="text"
                name="country"
                placeholder="Country"
                className="p-4 mb-3 w-[45%] text-[1.9rem] bg-black text-white border-0 border-b-2"
              />
            </div>

            {/* <div className="w-full ">
              <input
                type="text"
                name="country"
                placeholder="Country"
                className="p-4 mb-3 w-full text-[1.9rem] bg-black text-white border-0 border-b-2"
              />
            </div> */}
          </div>
          <button
            type="submit"
            className="flex justify-center w-[6rem] h-[6rem] border rounded-full absolute bottom-[1rem] right-[1.5rem] bg-white"
          >
            {messagesent ? (
              <AiOutlineLoading3Quarters
                className="text-black my-auto animate-spin"
                size={"1.4rem"}
              />
            ) : (
              <p className="m-auto text-[1.3rem] cursor-pointer">Send</p>
            )}
          </button>
          {/* <input className="bg-red-300" type="submit" value="Send" /> */}
        </div>

        {/* <label>Name</label>
        <input type="text" name="from_name" />
        <label>Email</label>
        <input type="email" name="email_id" />
        <label>Mobile</label>
        <input type="number" name="mobile" />
        <label>Message</label>
        <textarea name="message" />
       */}
   {warning &&    <div className="w-full flex px-4">
       <p className="text-red-400 bg-black ms-auto">Fill all columns</p>

       </div>}
      </form>
   
    </div>
  );
};

export default Page;
