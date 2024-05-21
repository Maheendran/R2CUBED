"use client"
import React, { useRef, useState } from "react";
import NewNav from "../components/newNavb/NewNav";
import Footer from "../components/footer/Footer";
import { message } from "antd";
import Image from "next/image";
import contact from '../../../public/contact.png'
import emailjs from "@emailjs/browser";
import { useRouter } from "next/navigation";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
const Page = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [messagesent, setMessageSent] = useState(false);
  const form = useRef();
  const router = useRouter();
  const sendEmail = (e) => {
    e.preventDefault();

    setMessageSent(true);


    const formData = new FormData(form.current);

    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
    console.log(data,'data')

    if (!data.from_name || !data.email_id || !data.message ) {
      messageApi.open({
        type: "error",
        content: "Fill all columns",
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
        "template_hrugl6k",
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
  return (
    <>
      <NewNav />
      {contextHolder}
      <div className="w-full h-[110vh]  md:h-[128vh]  bg-black  overflow-hidden relative ">
        <div className="w-full h-[45vh] md:h-[55vh] bg-white text-neutral-800   relative">
          <Image className=" w-fyll md:w-[50%] mx-auto h-full" src={contact} alt="" />
          
    
        </div>

        <div className=" w-[90%] md:w-[40%] h-[78vh] flex gap-4  bg-black   p-4 absolute bottom-[1rem] left-0 right-0 mx-auto">
    
          <section className="text-gray-600 body-font relative mx-auto  bg-white  w-full">
            <div
              className=" w-full  h-full 
"
            >
              <div className="w-full h-full text-black   p-4 rounded-xl flex flex-col justify-between  ">
                <h2 className="text-[1.4rem] text-center  font-medium title-font">
                How can we help?
                </h2>
                <form ref={form} onSubmit={sendEmail} >

          
                <div className="relative ">
                  <label for="name" className="leading-7 text-sm ">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="from_name"
                    className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="relative ">
                  <label for="email" className="leading-7 text-sm ">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email_id"
                    className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="relative ">
                  <label for="message" className="leading-7 text-sm ">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
                
             


                <button
                disabled={messagesent}
            type="submit"
            className="flex  mx-auto justify-center
          
            border  bg-neutral-400"
          >
            {messagesent ? (

<p type="submit" className="text-white flex gap-3 bg-neutral-400 border-0 py-2  px-6 focus:outline-none hover:bg-black rounded text-lg">
Sending <span className=" my-auto ">
<AiOutlineLoading3Quarters
                className="text-white animate-spin"
                size={"1.4rem"}
              />
</span>
</p>
             
            ) : (

              <p type="submit" className="text-white bg-neutral-400 border-0 py-2  px-6 focus:outline-none hover:bg-black rounded text-lg">
              Send
            </p>
            )}
           
          </button>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer dataHide={true}/>
    </>
  );
};

export default Page;
