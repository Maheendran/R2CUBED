"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Lenis from "@studio-freight/lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Spline from "@splinetool/react-spline";
import Loading from "@/app/pages/loading/page";

import { GoArrowUpRight } from "react-icons/go";
import { Application } from "@splinetool/runtime";
import Link from "next/link";
import Navbar from "@/app/components/navbar/Navbar";
const Page = () => {
  const [loading, setLoading] = useState(true);
  const [splineloading, setSplineLoading] = useState(true);
  const splineRef = useRef(null);
  const cursorRef = useRef(null);
  const parentRef = useRef(null);
  const textRef = useRef(null);
  const textRefTwo = useRef(null);

  const arrowRef = useRef(null);
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

    return () => {
      spline.dispose();
    };
  }, []);



  // ============ first animation===============
  useEffect(() => {
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
      x: "-25vw",
      scale: 1.3,
      rotateZ: "150deg",

      ease: "power1.out",
    });
    tl.to("#fanta", {
      y: "145%",
      x: "-50.5vw",
      scale: 0.15,
      rotateZ: "0deg",
      ease: "power1.out",
    });
    // navbar
    var tls = gsap
      .timeline({
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
        top: "0rem",
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
  // ====================

  useEffect(() => {
    const cursor = cursorRef.current;

    gsap.to(".cursor", {
      left: "-10rem",
      top: "-10rem",
      duration: 1,
      scale: 0.1,
      ease: "power3.out",
    });
  }, []);

  const handleMouseEnter = (e) => {
    const cursor = cursorRef.current;
    gsap.to(".parentBox", {
      scale: 1.3,

      duration: 1, // Adjust the duration of the animation
      ease: "elastic.out", // Adjust the ease function for the bouncing effect
    });
    gsap.to(".cursor", {
      left: "10rem",
      top: "10rem",
      duration: 1.5,
      scale: 4.5,
      ease: "power4.out",
      zIndex: 1,
    });
    if (textRef.current) {
      textRef.current.classList.add("textColor");
    }
    if (textRefTwo.current) {
      textRefTwo.current.classList.add("textColor");
    }
  };

  const handleMouseLeave = (e) => {
    const cursor = cursorRef.current;
    gsap.to(".parentBox", {
      scale: 1,
    });
    gsap.to(".cursor", {
      left: "-10rem",
      top: "-10rem",
      duration: 1.5,
      scale: 0.1,
      ease: "power3.out",
    });

    if (textRef.current) {
      textRef.current.classList.remove("textColor");
    }
    if (textRefTwo.current) {
      textRefTwo.current.classList.remove("textColor");
    }
  };

  return (
    <>
      {splineloading && <Loading />}
      <div id="main" className="relative text-white mainbg max-w-[100vw] ">
        <div className="one w-full h-screen">
          <div className="absolute z-[100000]">
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

          <div className="w-full h-screen relative z-[1000000]">
            <Link href="/form">
              <div
                ref={parentRef}
                className="parentBox absolute cursor-pointer  justify-center  overflow-hidden z-[1000] right-[15rem]  top-[10vh]  m-auto flex parent w-[10rem] h-[10rem] border border-gray-500 rounded-full  "
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div
                  ref={textRef}
                  className="w-fit h-fit m-auto absolute top-0 bottom-0 left-0 right-0  z-[1000]"
                >
                  <GoArrowUpRight
                    className="mx-auto"
                    ref={arrowRef}
                    size={"3.9rem"}
                  />
                  <p className=" m-auto text-[1.3rem]">Start Project</p>
                </div>

                <div className=" cursor bg-red-300" ref={cursorRef}></div>
              </div>
            </Link>
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
            className=" flex justify-between w-full  navbg "
          >
           <Navbar/>
          </div>
        </div>
        {/* ===============   third page  =========================================================== */}
        <div className="third w-full h-screen mainbg relative">
          <Link href="/video">
            <div
              ref={parentRef}
              className="parentBox absolute cursor-pointer  justify-center  overflow-hidden z-[1000] right-[15rem]  top-[10rem]  m-auto flex parent w-[10rem] h-[10rem] border border-gray-400 rounded-full  "
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div
                ref={textRefTwo}
                className="w-fit h-fit m-auto absolute top-0 bottom-0 left-0 right-0  z-[1000]"
              >
                <GoArrowUpRight ref={arrowRef} size={"3.9rem"} />
                <p className=" m-auto text-[1.3rem]">Play</p>
              </div>

              <div className=" cursor bg-red-300" ref={cursorRef}></div>
            </div>
          </Link>
        </div>
        <div className="third w-full h-screen mainbg "></div>
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
