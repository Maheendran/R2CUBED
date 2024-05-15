"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import Spline from "@splinetool/react-spline";
import Loading from "@/app/pages/loading/page";

import { GoArrowUpRight } from "react-icons/go";
import { Application } from "@splinetool/runtime";
import Link from "next/link";
import Video from "@/app/components/video/Video";
import NewNav from "@/app/components/newNavb/NewNav";
import Card from "@/app/pages/cards/page";
import Footer from "@/app/components/footer/Footer";
import Carousel from "@/app/components/carousel/Carousel";
const Page = () => {
  const [splineloading, setSplineLoading] = useState(true);
  const [loading, setLoading] = useState(true);
  const [finalloading, setFinalLoading] = useState(true);
  const splineRef = useRef(null);
  const cursorRef = useRef(null);
  const parentRef = useRef(null);
  const textRef = useRef(null);
  const textRefTwo = useRef(null);

  const arrowRef = useRef(null);

  // ========================
  const canvasRef = useRef(null);

  useEffect(() => {
    const hasSplineLoaded = localStorage.getItem("splineLoaded");

    const handleBeforeUnload = () => {
      localStorage.removeItem("splineLoaded");
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    gsap.to("#heading", {
      y: 700,
    });
    const loadSplineContent = () => {
      const canvas = canvasRef.current;

      const spline = new Application(canvas);

      spline
        .load("https://prod.spline.design/GW6AzN9x5JiUUTXf/scene.splinecode")
        .then(() => {
          setTimeout(() => {
            setLoading(false);

            localStorage.setItem("splineLoaded", "true");
          }, 1500);
          setSplineLoading(false);
        })
        .then(() => {
          setTimeout(() => {
            gsap
              .timeline()
              .to("#heading", {
                delay: 2,
                y: 0,
                ease: "power2.out",
              })
              .to("#playBtn", {
                ease: "power2.out",
                opacity: 1,
              });
          }, 1000);
        })
        .catch((error) => {
          console.error("Error loading scene:", error);
        });
    };

    loadSplineContent();

    if (hasSplineLoaded === "true") {
      return setFinalLoading(false);
    }

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);



  // useEffect(() => {
  //   const screenSize =  window.screen.width ||500;
  // if(screenSize){
  // return  handleUpdateScreen(screenSize)}
    
  //   });

  //   const handleUpdateScreen=(screenSize)=>{
  //     if (screenSize<500) {
     
  //       var tl = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: ".two",
  //         start: "0% 50%",
  //         end: "100% 0%",
  //         scrub: true,
  //         markers:true
  //       },
  //     });
  //     tl.to("#fanta", {
  //       // y: "50%",
      
  //       ease: "power1.out",
  //     });
  //     tl.to("#fanta", {
  //       y: "100%",
     
  //       rotateZ: "0deg",
  //       ease: "power1.out",
  //     });
  //   }
  //     }
const[trigger,setTrigger]=useState(8)

    // window.addEventListener("resize", ()=>{
    //   setTrigger(window.innerWidth)
  
    // });
    // console.log(trigger, typeof(trigger),'trigger')
    
  useEffect(() => {
  
   
    gsap.registerPlugin(ScrollTrigger);
  
    var tl;
  
    const handleResize = (trigger) => {
      const isWindowDefined = typeof window !== 'undefined';
      const size = isWindowDefined ? window.screen.width : null;
   
  
      if (size < 767) {
      
        tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".two",
            start: "0% 100%",
            end: "10% 0%",
            scrub: true,
          },
        });
        tl.to("#fanta", {
          y: "200%",
          scale:0.75,
          rotateZ: "150deg",
          ease: "power1.out",
        });
      
      }
       else if(size>768) {
        tl = gsap.timeline({
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
          scale: 1.2,
          rotateZ: "150deg",
          ease: "power1.out",
        });
        tl.to(
          "#fanta",
          {
            y: "145%",
            x: "-48vw",
            scale: 0.11,
            rotateZ: "0deg",
            ease: "power1.out",
          },
          "-=0.2"
        );
      }
    };
    
    window.addEventListener("resize",handleResize() );

  
  
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  },[trigger]);

   

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    var tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: ".two",
          start: "0% 100%",
          end: "100% 0%",
          scrub: true,
        },
      })

      .to("#heading", {
        letterSpacing: "3rem",
      });

  //     const screenSize =  window.screen.width ||500;
  // if(screenSize<480){


  //     var tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: ".two",
  //       start: "0% 100%",
  //       end: "10% 0%",
  //       scrub: true,
  //       markers:true
  //     },
  //   });
  //   tl.to("#fanta", {
  //     y: "200%",
  //     rotateZ: "150deg",
  //     ease: "power1.out",
  //   });

  // }
  // else{
  //   var tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: ".two",
  //       start: "0% 100%",
  //       end: "100% 0%",
  //       scrub: true,
  //     },
  //   });
  //   tl.to("#fanta", {
  //     y: "100%",
  //     x: "-25vw",
  //     scale: 1.2,
  //     rotateZ: "150deg",
  //     ease: "power1.out",
  //   });
  //   tl.to("#fanta", {
  //     y: "145%",
  //     x: "-48vw",
  //     scale: 0.11,
  //     rotateZ: "0deg",
  //     ease: "power1.out",
  //   });
  
  // }

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
        opacity:1,
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
    gsap.to(".cursor", {
      left: "-10rem",
      top: "-10rem",
      duration: 1,
      scale: 0.1,
      ease: "power3.out",
    });
  }, []);

  const handleMouseEnter = (e) => {
    gsap.to(".parentBox", {
      scale: 1.2,

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
    gsap.to(".parentBox", {
      scale: 0.9,
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
      {finalloading && (
        <Loading
          setFinalLoading={setFinalLoading}
          splineloading={splineloading}
          loading={loading}
        />
      )}

      <div
        id="main"
        className="relative text-white mainbg max-w-[100vw] h-fit overflow-hidden  "
      >
      
        <div className="one   w-full h-screen relative">
          
          <div className="absolute h-fit bottom-[35vh] md:top-0 my-auto md:bottom-0   z-[100] overflow-hidden  ">
            
              <p
                id="heading"
                className=" text-[4rem] sm:text-[5rem] md:text-[13rem] font-bold "
              >
                R2
                <span className="text-[#b7141c]">CUBE</span>D
              </p>
           
          </div>

          <div id="fanta" className=" w-[100vw] h-[50vh] md:h-[100vh] absolute  top-0  z-[50] ">
            <canvas ref={canvasRef} id="canvas3d"></canvas>
          </div>

          <div className="w-full h-screen  relative z-[1000000]">
            <Link href="/video">
              <div
                id="playBtn"
                ref={parentRef}
                className="opacity-0  parentBox absolute cursor-pointer  justify-center  overflow-hidden z-[1000] right-[3rem] 
                 bottom-[10vh]  m-auto flex parent w-[6rem] h-[6rem] md:w-[10rem] md:h-[10rem] border border-gray-500 rounded-full  "
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div
                  ref={textRef}
                  className="w-fit  text-center arrowparent h-fit m-auto absolute top-0 bottom-0 left-0 right-0  z-[1000]"
                >
                  <GoArrowUpRight
                    className="mx-auto arrow text-[2rem] md:text-[3.9rem] "
                    ref={arrowRef}
                    // size={"3.9rem"}
                  />
                  <p className=" m-auto text-[1rem] md:text-[1.3rem]">Demo </p>
                </div>

                <div className=" cursor bg-red-300" ref={cursorRef}></div>
              </div>
            </Link>
          </div>
        </div>


        {/* ================  second page  ====================== */}
        <div className="two w-full h-fit flex flex-col sm:flex-row  common ">
          <div className="w-full  sm:w-1/2 :h-[50vh]  relative">
           
            <img src="/DIS.png" className="w-full h-full" alt="" />
            <Link href="/enquiry">
              <div
                ref={parentRef}
                className="parentBox absolute cursor-pointer  justify-center 
               overflow-hidden z-[1000] right-[1rem]  bottom-[1rem]  m-auto flex parent
               w-[6.5rem] h-[6.5rem] md:w-[10rem] md:h-[10rem] border border-gray-400 rounded-full  "
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div
                  ref={textRefTwo}
                  className=" arrowparent text-wrap w-fit h-fit m-auto absolute top-0 bottom-0 left-0 right-0  z-[1000]"
                >
                  <GoArrowUpRight
                    ref={arrowRef}
                    className="mx-auto arrow text-[2rem] md:text-[3.9rem] "
                 
                  />
                  <p className=" m-auto  text-[0.9rem] md:text-[1.1rem]">Start Project</p>
                </div>

                <div className=" cursor " ref={cursorRef}></div>
              </div>
            </Link>
          </div>

          <div className="w-full sm:w-1/2  h-fit my-auto relative ">
            <p className="text-[2rem] md:text-[4rem] px-4 sm:px-0">Discover Our Story</p>
            <div className="m-2 md:w-[90%] bgblur h-fit p-4 text-[0.9rem] ">
              <p>
                R2C specializes in Deep Tech Solutions for Manufacturing,
                covering areas such as IIoT, Energy Management, AI, ML, Computer
                Vision-enabled analytics, and AR & VR Simulation Solutions. We
                ensure high Uptime and perform Predictive Analytics using Sensor
                Data tracking, correlation, trend analysis, anomaly detection,
                and causal inferencing to keep Downtime low while improving
                throughput and productivity. Our solutions are comprehensive,
                end-to-end, scalable, and deliver unparalleled ROI. Connect with
                us to share your business needs and discover how we can make a
                difference for you with our solutions.
              </p>
            </div>
          </div>

          <div id="navbar" className=" opacity-0 flex justify-between w-full navbg ">
          
            <NewNav />
          </div>
        </div>
        {/* ===============   third page  =========================================================== */}
        <div className="third    common w-full h-fit mainbg relative overflow-hidden ">
          <Video />
        </div>
        {/* ================  fourth page  ====================== */}
        <div className="hidden md:block w-[90%] mx-auto common h-[120vh]    mt-5">
          <Card />
        </div>
        <div className="block md:hidden w-[95%] mx-auto common h-fit    mt-5">
        
          <Carousel/>
        </div>
        {/* ================  fifth page  ====================== */}
        <Footer />
      </div>
    </>
  );
};

export default Page;
