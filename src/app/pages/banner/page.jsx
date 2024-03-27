"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Lenis from "@studio-freight/lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Spline from "@splinetool/react-spline";
import Loading from "@/app/pages/loading/page";

import { Application } from "@splinetool/runtime";

const Page = () => {
  const [loading, setLoading] = useState(true);
  const [splineloading, setSplineLoading] = useState(true);
  const splineRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time + 100);
      requestAnimationFrame(raf);
    }
    window.scrollTo(0, 0);
    requestAnimationFrame(raf);
  }, []);

  // ========================
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;

    const spline = new Application(canvas);

    spline
      .load("https://prod.spline.design/BLU4qtr1FsC0jYoE/scene.splinecode")
      .then(() => {
        setTimeout(() => {
          setSplineLoading(false);
        }, 1500);
      })

      .catch((error) => {
        console.error("Error loading scene:", error);
      });

    // Cleanup function
    return () => {
      // Dispose the spline application to release resources
      spline.dispose();
    };
  }, []);
  // ============
  useEffect(() => {
    function isMobile() {
      // Check if the device width is less than or equal to 768 pixels
      return window.innerWidth >= 768;
    }

    gsap.registerPlugin(ScrollTrigger);

    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".two",
        start: "0% 100%",
        end: "100% 0%",
        scrub: true,
      },
    });

    tl.to("#fanta", {
      y: "100%",
      x: "-20rem",
      scale: 1.3,
      rotateZ: "150deg",

      ease: "power1.out",
    });
    tl.to("#fanta", {
      y: "145%",
      x: "-37.5rem",
      scale: 0.15,
      rotateZ: "0deg",
      ease: "power1.out",
    });
    // navbar
    var tls = gsap.timeline({
      scrollTrigger: {
        trigger: ".third",
        start: "15% 30%",
        end: "25% 15%",
        scrub: true,
      },
    })
    .to("#navbar", {
      ease: "power1.out",
      top: 0,
      position: "fixed",
      zIndex: 1000000000,
    })
    .to("#logo", {
      ease: "power1.out",
      // top: 0,
    top:"0rem",
    // margin:"auto",
      zIndex: 1000000000,
    });

    // ////////second section

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".modelTwo",
          start: "0% 95%",
          end: "50% 30%",
          scrub: true,
        },
      })
      .to("#fantaTwo", {
        y: "150%",
        scale: 0.01,
        rotateZ: "180deg",
        ease: "power1.out",
      });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".modelTwo",
          start: "0% 95%",
          end: "50% 50%",
          scrub: true,
        },
      })
      .fromTo(
        ".leftbox",
        {
          x: "-100rem", // Move from -100rem
          opacity: 0, // Start with opacity 0 for a fade-in effect
        },
        {
          x: "1rem", // Move to 0rem
          opacity: 1, // Fade in completely
          ease: "power1.out", // Adjust easing for smoother movement
        }
      );

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".modelTwo",
          start: "0% 95%",
          end: "50% 50%",
          scrub: true,
        },
      })
      .fromTo(
        ".rightbox",
        {
          x: "100rem", // Move from -100rem
          opacity: 0, // Start with opacity 0 for a fade-in effect
        },
        {
          x: "-1rem", // Move to 0rem
          opacity: 1, // Fade in completely
          ease: "power1.out", // Adjust easing for smoother movement
        }
      );
  }, []);

  return (
    <>
      {splineloading && <Loading />}
      <div id="main" className="relative text-white mainbg max-w-[100vw] ">
        <div className="one w-full h-screen">
          <div className="absolute z-[100000]">
            {/* <Spline   
                               scene='https://prod.spline.design/BLU4qtr1FsC0jYoE/scene.splinecode'></Spline> */}

            <div className="  z-[-1]">
              <canvas ref={canvasRef} id="canvas3d"></canvas>
            </div>
          </div>

          <div id="fanta" className=" w-[100vw] h-[100vh] absolute   z-[50] ">
            <Spline
              className="w-full h-full  "
              id="box"
              scene="https://prod.spline.design/ThZV623jazw2LSZ1/scene.splinecode"
            />
          </div>
        </div>

        <div className="two w-full h-fit flex flex-col sm:flex-row overflow-hidden">
          <div className="w-full sm:w-1/2 h-[50vh] sm:h-screen">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#e04428"
                d="M41.5,-59.5C49.8,-51.1,49.7,-33.6,50.7,-19.2C51.7,-4.7,53.8,6.7,52.4,18.9C51.1,31.1,46.3,44.1,36.9,52.9C27.6,61.8,13.8,66.5,-2.5,70C-18.8,73.4,-37.7,75.6,-52.5,68.5C-67.3,61.5,-78.2,45.2,-84.5,27.1C-90.9,9,-92.7,-10.8,-80.5,-19.3C-68.3,-27.8,-42.1,-24.8,-26.3,-30.8C-10.6,-36.8,-5.3,-51.7,5.7,-59.5C16.6,-67.3,33.2,-68,41.5,-59.5Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>
          <div className="w-full sm:w-1/2 h-fit my-auto">
            <h1 className="text-[5rem]">Heading</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam,
              excepturi sed, itaque placeat id natus soluta veniam obcaecati qui
              a laborum laboriosam dolorem illum labore sit, voluptates commodi
              neque dolores tempore temporibus deleniti? Nobis, ratione hic
              error quis cum neque nulla laudantium nostrum sit nihil dolorum
              quisquam enim quaerat, eaque ex sequi, harum totam quia non!
              Labore, neque! Amet voluptatem illo similique recusandae! Ex
              quaerat quibusdam asperiores, ducimus tempore magni labore.
              Tenetur voluptas, quos ex repellendus provident mollitia
              laboriosam adipisci alias a impedit, cum accusamus rerum delectus
              eaque facilis veniam quia laborum incidunt ea assumenda! Eos magni
              aspernatur quod distinctio.
            </p>
          </div>

          <div
            id="navbar"
            className=" flex justify-between w-full h-[8.5vh] navbg"
          >
            <div className=" w-[3.3rem] h-full relative my-auto px-2">
              <img  id="logo"  className="absolute top-[-3rem] w-full h-full py-[2px]" src="./logo.png" alt="" />
            </div>

            <div className="w-fit flex gap-3 my-auto px-4">
              <p>Home</p>
              <p>About</p>
              <p>Contact</p>
              <p>Home</p>
            </div>
          </div>
        </div>

        <div className="third w-full h-screen mainbg"></div>
        <div className="third w-full h-screen mainbg"></div>
      </div>
    </>
  );
};

export default Page;

{
  /* ===================== */
}
{
  /* <div className='w-full h-screen relative bg-black text-white'>


    <div className='absolute z-[100] '>
      <Spline scene='https://prod.spline.design/BLU4qtr1FsC0jYoE/scene.splinecode'></Spline>
    </div>


      <div id='fantaTwo'   className='  z-[1]  w-[100vw] h-[100vh] absolute  bottom-0  '>
    <Spline className='w-full h-full  ' id='box' scene='https://prod.spline.design/ThZV623jazw2LSZ1/scene.splinecode'/> 
      
</div>
</div>
<div className='relative modelTwo  bg-black   overflow-hidden  flex justify-between m-auto h-screen z-[-1] text-black   '>
  

  <div className='leftbox absolute  top-0 bottom-0 w-[45%] h-fit my-auto '>
    <h1 className='text-[3rem] text-center mt-5 text-neutral-200'>Subheading-1</h1>
    <p className='text-[1rem] text-justify text-neutral-400 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, excepturi sed, itaque placeat id natus soluta veniam obcaecati qui a laborum laboriosam dolorem illum labore sit, voluptates commodi neque dolores tempore temporibus deleniti? Nobis, ratione hic error quis cum neque nulla laudantium nostrum sit nihil dolorum quisquam enim quaerat, eaque ex sequi, harum totam quia non! Labore, neque! Amet voluptatem illo similique recusandae! Ex quaerat quibusdam asperiores, ducimus tempore magni labore. Tenetur voluptas, quos ex repellendus provident mollitia laboriosam adipisci alias a impedit, cum accusamus rerum delectus eaque facilis veniam quia laborum incidunt ea assumenda! Eos magni aspernatur quod distinctio.</p>
  </div>
  <div className='rightbox absolute    right-[1rem] bottom-0 top-0  w-[45%] h-fit my-auto '>
    <h1 className='text-[3rem] text-center mt-5 text-neutral-200'>Subheading-2</h1>
    <p className='text-[1rem] text-justify text-neutral-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, excepturi sed, itaque placeat id natus soluta veniam obcaecati qui a laborum laboriosam dolorem illum labore sit, voluptates commodi neque dolores tempore temporibus deleniti? Nobis, ratione hic error quis cum neque nulla laudantium nostrum sit nihil dolorum quisquam enim quaerat, eaque ex sequi, harum totam quia non! Labore, neque! Amet voluptatem illo similique recusandae! Ex quaerat quibusdam asperiores, ducimus tempore magni labore. Tenetur voluptas, quos ex repellendus provident mollitia laboriosam adipisci alias a impedit, cum accusamus rerum delectus eaque facilis veniam quia laborum incidunt ea assumenda! Eos magni aspernatur quod distinctio.</p>
  </div>


</div> */
}
