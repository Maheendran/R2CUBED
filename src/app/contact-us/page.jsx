import React from "react";
import NewNav from "../components/newNavb/NewNav";
import { BiSolidMessage } from "react-icons/bi";
import { IoCallSharp } from "react-icons/io5";
import { MdConnectWithoutContact } from "react-icons/md";
import { FaAddressCard } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Footer from "../components/footer/Footer";
import { FaTwitterSquare } from "react-icons/fa";
const Page = () => {
  return (
    <>
      <NewNav />
      <div className="w-full h-[128vh]  bg-black  overflow-hidden relative ">
        <div className="w-full h-[55vh] bg-white text-neutral-800   relative">
          <img className="w-[50%] mx-auto h-full" src="/contact.png" alt="" />
          {/* <div className="absolute w-fit h-fit flex justify-center left-0 right-0 m-auto top-0 bottom-0  text-center bg-white/50 p-2 ">
            <p className="text-[2rem] font-semibold">
            We’d love to help you!
            </p>
           
          </div> */}
        </div>

        <div className="w-[40%] h-[78vh] flex gap-4  bg-black   p-4 absolute bottom-[1rem] left-0 right-0 mx-auto">
          {/* <div className="w-[40%] h-full flex flex-col   gap-4">
            <div className="w-full h-1/3 bg-white border relative">
              <div className="flex gap-4 absolute top-0 right-0 left-0 bottom-0 m-auto  w-fit h-fit">
                <div className="w-[4rem] h-[4rem] flex justify-center  border-2 border-neutral-400 rounded-full">
                  <IoCallSharp
                    className="m-auto text-neutral-800"
                    size={"1.5rem"}
                  />
                </div>
                <div className="w-fit h-fit  my-auto ">
                  <p className="text-[0.8rem] mb-1">Call us</p>
                  <p className="text-[1.1rem] font-semibold">
                    +91 9090909090
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full h-1/3  bg-white border relative">
              <div className="flex gap-4 absolute top-0   right-0 left-0 bottom-0 m-auto  w-fit h-fit">
                <div className=" flex justify-center w-[4rem] h-[4rem]  border-2 border-neutral-400 rounded-full">
                  <FaAddressCard
                    className="m-auto text-neutral-800"
                    size={"1.5rem"}
                  />
                </div>
                <div className="w-fit h-fit  my-auto ">
                  <p className="text-[0.8rem] mb-1">Meet us</p>
                  <p className="font-semibold">xyz area colony </p>
                <p className="font-semibold">Bag dist</p>
      
                </div>
              </div>
            </div>
            <div className="w-full h-1/3 bg-white border relative">
              <div className="flex gap-4 absolute top-0   right-0 left-0 bottom-0 m-auto  w-fit h-fit">
                <div className=" flex justify-center w-[4rem] h-[4rem]  border-2 border-neutral-400 rounded-full">
                  <MdConnectWithoutContact
                    className="m-auto text-neutral-800"
                    size={"1.5rem"}
                  />
                </div>
                <div className="w-fit h-fit  my-auto ">
                  <p className="text-[0.8rem] mb-1">Connect with us</p>
              <div className="flex gap-3">
                <button ><FaLinkedin size={'1.5rem'}/></button>
                <button><FaTwitterSquare size={'1.5rem'}/></button>
              </div>
                </div>
              </div>
            </div>
          </div> */}
          {/* right */}

          <section className="text-gray-600 body-font relative mx-auto  bg-white  w-full">
            <div
              className=" w-full  h-full 
"
            >
              <div className="w-full h-full text-black   p-4 rounded-xl flex flex-col justify-between  ">
                <h2 className="text-[1.4rem] text-center  font-medium title-font">
                For Contact 
                </h2>

                <div className="relative ">
                  <label for="name" className="leading-7 text-sm ">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
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
                    name="email"
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
                <button className="text-white bg-neutral-400 border-0 py-2  px-6 focus:outline-none hover:bg-black rounded text-lg">
                  Send
                </button>
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
