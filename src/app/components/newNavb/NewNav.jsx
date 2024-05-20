"use client";
import React, { useState } from "react";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import { MdMenuOpen } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";
const NewNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="w-full h-fit relative text-white">
        <div
          className={`${
            isOpen ? "fixed z-[1000000]" : "relative"
          } flex justify-between w-full  z-[10000000] h-[8.5vh]
      navbg
      overflow-hidden
       `}
        >
          <div className="   w-[10.5rem] h-[7vh]  my-auto   px-2">
            <Link href="/">
              <img
                id="logo"
                className="  w-full h-full "
                src="./navbarlogo1.jpg"
                alt=""
              />
            </Link>
          </div>

          {/* ================ */}

          <div className="hidden md:block w-fit cursor-pointer h-full  relative  gap-2 z-[1000]">
            <div className=" menubtn text-white bg-black  my-auto overflow-hidden  flex justify-center   h-full  z-[1000]">
              <div className="my-auto">
                <svg
                  className="  subesvg  bg-black"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    className="dotone"
                    d="M13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6C12.5523 6 13 5.55228 13 5Z"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    className="dottwo"
                    d="M13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12Z"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    className="dotthree"
                    d="M13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19Z"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>

              <div
                id=""
                className=" menuOne flex gap-3 absolute    top-0 bottom-0 my-auto w-[29vw] z-[-100]"
              >
                <Link href="/about" className="my-auto">
                  <p className="my-auto menuNav text-[0.9rem]">About</p>
                </Link>
                <Link href="/manufacturing" className="my-auto">
                  <p className="my-auto menuNav text-[0.9rem]">Manufacturing</p>
                </Link>
                {/* <Link href="/retail" className="my-auto">
                  <p className=" menuNav text-[0.9rem]">Retail</p>
                </Link> */}
                <Link href="/enquiry" className="my-auto">
                  <p className=" menuNav text-[0.9rem]">Project</p>
                </Link>
                <Link href="/contact-us" className="my-auto">
                  <p className="my-auto menuNav text-[0.9rem]">Contact us</p>
                </Link>
              </div>
            </div>
          </div>

          {isOpen ? (
            <MdMenuOpen
              onClick={handleMenu}
              size={"3rem"}
              color="white"
              className="block md:hidden text-white  my-auto px-2"
            />
          ) : (
            <MdOutlineMenu
              onClick={handleMenu}
              size={"3rem"}
              color="white"
              className="block md:hidden text-white  my-auto px-2"
            />
          )}
        </div>
        <div
          className={`${
            isOpen ? "slideIn mt-[8.5vh] " : "slideOut  top-0"
          } block md:hidden fixed h-[91.5vh] w-full   bg-black 
      z-[10000]`}
        >
          <div
            id=""
            className="w-fit h-fit  flex flex-col  absolute    top-0 left-0 right-0 bottom-0 m-auto  "
          >
            <Link href="/about" className="my-auto">
              <p className="  text-[1.3rem] my-[1rem]">About</p>
            </Link>
            <Link href="/manufacturing" className="">
              <p className="  text-[1.3rem] my-[1rem]">Manufacturing</p>
            </Link>
            {/* <Link href="/retail" className="">
              <p className="  text-[1.3rem] my-[1rem]">Retail</p>
            </Link> */}
            <Link href="/enquiry" className="">
              <p className="  text-[1.3rem] my-[1rem]">Project</p>
            </Link>
            <Link href="/contact-us" className="">
              <p className="  text-[1.3rem] my-[1rem]">Contact us</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewNav;
