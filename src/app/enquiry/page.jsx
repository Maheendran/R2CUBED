"use client";
import React, { useRef, useState } from "react";
import NewNav from "../components/newNavb/NewNav";
import emailjs from "@emailjs/browser";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { message } from "antd";
import { useRouter } from "next/navigation";
import Footer from "../components/footer/Footer";

const Page = () => {
  const router = useRouter();

  const form = useRef();
  const [messageApi, contextHolder] = message.useMessage();

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

    if (
      !selectedValue ||
      !selectedServiceValue ||
      !solutionsValue ||
      !discriptionValue
    ) {
      messageApi.open({
        type: "error",
        content: "Some values missing",
      });
      return setMessageSent(false);
    }

    const formData = new FormData(form.current);

    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    if (!data.country || !data.email_id || !data.from_name || !data.mobile) {
      messageApi.open({
        type: "error",
        content: "Fill contact form",
      });

      return setMessageSent(false);
    }


    if(data.email_id){
const validated=validateEmail(data.email_id)
if(!validated){
  messageApi.open({
    type: "error",
    content: "Enter valid email",
  });
  return setMessageSent(false);
}

    }

    if(data.mobile){
      const validated=validatePhoneNumber(data.mobile)
if(!validated){
  messageApi.open({
    type: "error",
    content: "Enter valid mobile number",
  });
  return setMessageSent(false);
}

      
    }
    const dummyForm = document.createElement("form");

    Object.keys(data).forEach((key) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = key;
      input.value = data[key];
      dummyForm.appendChild(input);
    });

    form.current.appendChild(dummyForm);

    emailjs
      .sendForm(
        "service_f7oqhwa",
        "template_y7fvw7q",
        form.current,
        "sF9ZqI5aNSsi0f5Iw"
      )
      .then(
        (result) => {
          messageApi.open({
            type: "success",
            content: "message sent successfully",
          });
          setMessageSent(false);
          form.current.reset()
          setTimeout(() => {
            router.push("/");
          }, 1500);
        },
        (error) => {
          setMessageSent(false);
          console.log(error.text);
        }
      );
  };
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function validatePhoneNumber(phoneNumber) {
  const re = /^\+?[1-9]\d{1,14}$/;
  return re.test(String(phoneNumber));
}


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
      {contextHolder}
      <NewNav />

      <form ref={form} onSubmit={sendEmail} className="bg-black">
        <div className="w-[98%] sm:w-[60%] md:w-[40%]  mx-auto px-[2rem] h-fit text-white ">
          <div>
            <p className="text-[2rem] md:text-[2.3rem] mb-[2rem] bg-black text-white  ">
              What are you searching for ?
            </p>

            <p className="text-[1.5rem]">
              Identify Your Industry
              <span className="text-red-600 text-[1.4rem] ml-1">*</span>
            </p>
            <div className="flex mt-2 text-[1.5rem] gap-2">
              <input
                className="w-[20px] h-[20px] md:w-[1.5rem] md:h-[1.5rem]  my-auto"
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
                className="w-[20px] h-[20px] md:w-[1.5rem] md:h-[1.5rem]  my-auto"
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
                className="w-[20px] h-[20px] md:w-[1.5rem] md:h-[1.5rem]  my-auto"
                type="radio"
                name="industry"
                value="Oil & Gas"
                checked={selectedValue === "Oil & Gas"}
                onChange={handleRadioChange}
              />
              <p className="my-auto text-[1.2rem]">Oil & Gas</p>
            </div>
            <div className=" flex  mt-2 text-[1.5rem] gap-2">
              <input
                className="w-[20px] h-[20px]  md:w-[1.5rem] md:h-[1.5rem] my-auto"
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
                className="w-[20px] h-[20px] md:w-[1.5rem] md:h-[1.5rem]  my-auto"
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
                className="w-[20px] h-[20px] md:w-[1.5rem] md:h-[1.5rem]  my-auto"
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
                className="w-[20px] h-[20px] md:w-[1.5rem] md:h-[1.5rem]  my-auto"
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
                className="w-[20px] h-[20px] md:w-[1.5rem] md:h-[1.5rem]  my-auto"
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
                className="w-[20px] h-[20px] md:w-[1.5rem] md:h-[1.5rem]  my-auto"
                type="radio"
                name="industry"
                value="Building Management"
                checked={selectedValue === "Building Management"}
                onChange={handleRadioChange}
              />
              <p className="my-auto text-[1.2rem]">Building Management</p>
            </div>
          </div>
          {/* ]]]]]]]]]second form]]]]]]]]]]]] */}
          <div>
            <p className="text-[1.5rem] mt-[2rem]">
              What are you looking for ?
              <span className="text-red-600 text-[1.4rem] ml-1">*</span>
            </p>
            <div className="flex mt-2 text-[1.5rem] gap-2">
              <input
                className="w-[20px] h-[20px]  md:w-[1.5rem] md:h-[1.5rem]  my-auto"
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
                className="w-[20px] h-[20px] md:w-[1.5rem] md:h-[1.5rem]  my-auto"
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
                className="w-[20px] h-[20px] md:w-[1.5rem] md:h-[1.5rem]  my-auto"
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
                className="w-[20px] h-[20px] md:w-[1.5rem] md:h-[1.5rem]  my-auto"
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
            <p className="text-[1.5rem] mt-[2rem]">
              When do you need the solutions implemented?
              <span className="text-red-600 text-[1.4rem] ml-1">*</span>
            </p>
            <div className="flex mt-2 text-[1.5rem] gap-2">
              <input
                className="w-[20px] h-[20px] md:w-[1.5rem] md:h-[1.5rem]  my-auto"
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
                className="w-[20px] h-[20px] md:w-[1.5rem] md:h-[1.5rem]  my-auto"
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
                className="w-[20px] h-[20px] md:w-[1.5rem] md:h-[1.5rem]  my-auto"
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
            <p className="text-[1.5rem] mt-[2rem]">Budget</p>
            <div className="flex mt-2 text-[1.5rem] gap-2">
              <input
                className="w-[20px] h-[20px] md:w-[1.5rem] md:h-[1.5rem]  my-auto"
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
                className="w-[20px] h-[20px] md:w-[1.5rem] md:h-[1.5rem]  my-auto"
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
            <p className="text-[1.5rem] mt-[2rem]">
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
        <div
          className="w-full  h-fit  my-4 bg-black  flex flex-col
         p-5 justify-center relative"
        >
          <div className="md:w-[70%]  h-fit  m-auto flex flex-col mt-2  mt-2-col ">
            <div className="w-full  flex mt-2 justify-between ">
              <input
              required
                type="text"
                name="from_name"
                placeholder="Fullname"
                className="p-4 mb-3 w-[45%] text-[1.9rem] bg-black text-white border-0 border-b-2"
              />

              <input
                 required
                type="text"
                name="email_id"
                placeholder="Email"
                className="p-4 mb-3 w-[45%] text-[1.9rem] bg-black text-white border-0 border-b-2"
              />
            </div>

            <div className="w-full flex justify-between ">
              <input
                 required
                type="number"
                name="mobile"
                placeholder="Phone"
                className="p-4 mb-3 w-[45%] text-[1.9rem] bg-black text-white border-0 border-b-2"
              />
              <input
                 required
                type="text"
                name="country"
                placeholder="Country"
                className="p-4 mb-3 w-[45%] text-[1.9rem] bg-black text-white border-0 border-b-2"
              />
            </div>

          
          </div>
          
          <button
            type="submit"
            className="flex  mx-auto justify-center md:w-[6rem] md:h-[6rem]
            w-[4rem] h-[4rem]
            border rounded-full md:absolute bottom-[1rem] right-[1.5rem] bg-white"
          >
            {messagesent ? (
              <AiOutlineLoading3Quarters
                className="text-black my-auto animate-spin"
                size={"1.4rem"}
              />
            ) : (
              <p className="m-auto text-[1.1rem] md:text-[1.3rem] cursor-pointer">
                Send
              </p>
            )}
          </button>
        </div>

        
      </form>
      <Footer/>
    </div>
  );
};

export default Page;
