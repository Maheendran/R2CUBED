"use client"
import React, { useRef, useState } from "react";
import NewNav from "../components/newNavb/NewNav";
import Footer from "../components/footer/Footer";
import { message } from "antd";
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
          <img className="w-[50%] mx-auto h-full" src="/contact.png" alt="" />
        
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

// <section className="text-gray-600 body-font relative  h-[91.5vh] w-full">
// <div
//   className="container px-5   h-fit absolute p-4 top-0 bottom-0 left-0 right-0 m-auto
// flex sm:flex-nowrap flex-wrap"
// >
//   <div className="lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10  flex items-end justify-start relative">
//     <img src="/contact.png" alt="" />
//   </div>
//   <div className="lg:w-1/3 md:w-1/2  text-white p-4 rounded-xl bg-black flex flex-col md:ml-auto w-full  mt-8 md:mt-0">
//     <h2 className="text-[1.4rem] mb-1 font-medium title-font">Contact-Us</h2>

//     <div className="relative mb-4">
//       <label for="name" className="leading-7 text-sm ">
//         Name
//       </label>
//       <input
//         type="text"
//         id="name"
//         name="name"
//         className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//       />
//     </div>
//     <div className="relative mb-4">
//       <label for="email" className="leading-7 text-sm ">
//         Email
//       </label>
//       <input
//         type="email"
//         id="email"
//         name="email"
//         className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//       />
//     </div>
//     <div className="relative mb-4">
//       <label for="message" className="leading-7 text-sm ">
//         Message
//       </label>
//       <textarea
//         id="message"
//         name="message"
//         className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
//       ></textarea>
//     </div>
//     <button className="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">
//       Send
//     </button>

//   </div>
// </div>
// </section>

// <div className='w-full h-[91.5vh] relative'>
//   <img className='h-full mx-auto' src="/contact.png" alt="" />
//   <div className='absolute p-4 top-0 bottom-0 left-0 right-0 m-auto w-[30%] h-[80%] rounded-3xl contactForm
//   flex flex-col justify-between'>
//   <input
//     type="text"
//     placeholder="Name"
//     className="contactInput p-2 mb-1 bg-red-300 w-[100%] text-[2rem] bg-transparent text-white border-0 border-b-2"
//   />
// <input
//     type="text"
//     placeholder="Email"
//     className="contactInput p-2 mb-1 bg-red-300 w-[100%] text-[2rem] bg-transparent text-white border-0 border-b-2"
//   />

// <input
//     type="text"
//     placeholder="Phone"
//     className="contactInput p-2 mb-1 bg-red-300 w-[100%] text-[2rem] bg-transparent text-white border-0 border-b-2"
//   />
// <textarea
//     type="text"
//     placeholder="message"
//     className="contactInput p-2 mb-1 bg-red-300 w-[100%] h-[30vh] text-[2rem] bg-transparent text-white border-0 border-b-2"
//   />
// <div className='w-full flex'>
// <button class="relative  hover:border-sky-600 duration-500 group cursor-pointer text-sky-50  overflow-hidden h-14 w-56 rounded-md bg-sky-800 p-2 flex justify-center items-center font-extrabold
// mx-auto">
// <div class="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-900 delay-150 group-hover:delay-75"></div>
// <div class="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-800 delay-150 group-hover:delay-100"></div>
// <div class="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-700 delay-150 group-hover:delay-150"></div>
// <div class="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-600 delay-150 group-hover:delay-200"></div>
// <div class="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-500 delay-150 group-hover:delay-300"></div>
// <p class="z-10">Send</p>
// </button>

// </div>

//   </div>
//   </div>
