import React from "react";
import Link from "next/link";

const Footer = ({ routeData = "enquiry" }) => {
  return (
    <>
      <section class="bg-black text-white relative">
        <div class="max-w-screen-xl px-4 py-4 md:py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
         
          <div class="flex flex-col-reverse text-center md:flex-col justify-center mt-8 md:space-x-6">
          
            <a target="blank" href="https://www.linkedin.com/company/r2-cubed/" class=" mx-auto  mt-5 text-gray-400 hover:text-gray-500">
              <svg
                class="w-7 h-8"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 002 2.866v10.268a.88.88 0 00.885.866h10.226a.882.882 0 00.889-.866V2.865a.88.88 0 00-.889-.864z" />
              </svg>
            </a>

<div className="relative   md:absolute md:right-[5%] w-full md:w-[30%] h-fit">
   <Link href={`/${routeData}`}>
              <button class="button3 md:absolute right-[5%] h-fit  top-0 bottom-0 w-fit m-auto">
                Book A Demo
              </button>
            </Link>
</div>
           

          </div>

          <p class="mt-8  text-xs leading-6 text-center text-gray-400">
           
            © Copyright 2017-2024 All Rights Reserved by R2Cubed
          </p>
        </div>
      </section>
    </>
  );
};

export default Footer;
