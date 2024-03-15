"use client"
import React, { useEffect } from 'react'
import gsap from 'gsap'
import Lenis from "@studio-freight/lenis";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Spline from '@splinetool/react-spline'


const Page = () => {
    useEffect(() => {
      function isMobile() {
        // Check if the device width is less than or equal to 768 pixels
        return window.innerWidth >= 768;
    }
   
        gsap.registerPlugin(ScrollTrigger);
    
        // // Animation timeline
        // const tl = gsap.timeline({
        //   scrollTrigger: {
        //     trigger: ".one",
        //     start: "90% 65%",
        //     end: "100% 20%",
        //     scrub: true,
        //     markers: true,
        //   }
        // });
        // tl.to("#fanta", {
        //   // width:"10rem",
        //   // height:'10rem',
        // //   transformOrigin:'center',
        // scale:0.3,
        //   top: "0%",
        //   left: "0%",
        //   position:"fixed",
        //   // rotate:'360deg',
        //   scrub: true,
        //   zIndex:100
        // });





        var tl = gsap.timeline({scrollTrigger:{
          trigger: ".two",
          start: "0% 95%",
          end: "70% 50%",
          scrub: true,
          // markers: true,
      }})
      
      tl.to("#fanta", {
        
        width: "50%",
        height: "50vh",
        top: "120%",
rotateZ:"180deg"
        // Check if it's a mobile device
       
    }, 'orange');
      

    if (isMobile()){ 
      gsap.set("#fanta", {    left: 0,});
  }

      var tls = gsap.timeline({scrollTrigger:{
        trigger: ".one",
        start: "90% 40%",
        end: "100% 10%",
        scrub: true,
        // markers: true,
    }})
    tls.to("#navbar", {
          // transition:"0.5s" ,
              top:0,
                 position:"fixed",
                 scrub: true,
               });
      // tl.to("#orange-cut",{
      //     top:"160%",
      //     left: "23%"
      // }, 'orange')
      // tl.to("#orange",{
      //     width: "15%",
      //     top:"160%",
      //     right: "10%"
      // }, 'orange')
      // tl.to("#leaf",{
      //     top:"110%",
      //     rotate: "130deg",
      //     left: "70%"
      // }, 'orange')
      // tl.to("#leaf2",{
      //     top:"110%",
      //     rotate: "130deg",
      //     left: "0%"
      // }, 'orange')
      
    
      }, [])

      useEffect(() => {
  
        const lenis = new Lenis();
        function raf(time) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }
        window.scrollTo(0, 0);
        requestAnimationFrame(raf);
      }, []);

    
    
  
  return (
    <div id="main" className='bg-white text-black max-w-[100vw] overflow-hidden'>
  <div id='navbar' className='w-full h-[10vh] z-[1000000000] border'></div>
    
    <div className="one w-full h-screen">
      <h1 className='z-50'>R2cubed</h1>
<div className='w-full h-screen  absolute top-0 z-10'></div>

      <div id='fanta'   className=' w-[100%] h-[10rem] mx-auto sm:w-full sm:h-screen   z-[-1] '>
        <img className='w-full h-full' src="./cube.png" alt="" />
  {/* <Spline className=' w-full h-full' scene='https://prod.spline.design/0Dy6CyamcoBFsnAK/scene.splinecode'/> */}
</div>

    </div>
    <div className="two w-full h-fit flex flex-col sm:flex-row">
      <div className="w-full sm:w-1/2 h-[50vh] sm:h-screen">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#e04428" d="M41.5,-59.5C49.8,-51.1,49.7,-33.6,50.7,-19.2C51.7,-4.7,53.8,6.7,52.4,18.9C51.1,31.1,46.3,44.1,36.9,52.9C27.6,61.8,13.8,66.5,-2.5,70C-18.8,73.4,-37.7,75.6,-52.5,68.5C-67.3,61.5,-78.2,45.2,-84.5,27.1C-90.9,9,-92.7,-10.8,-80.5,-19.3C-68.3,-27.8,-42.1,-24.8,-26.3,-30.8C-10.6,-36.8,-5.3,-51.7,5.7,-59.5C16.6,-67.3,33.2,-68,41.5,-59.5Z" transform="translate(100 100)" />
        </svg>
      </div> 
      <div className="w-full sm:w-1/2 h-fit my-auto">
        <h1 className='text-[5rem]'>Flavour Updated</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, excepturi sed, itaque placeat id natus soluta veniam obcaecati qui a laborum laboriosam dolorem illum labore sit, voluptates commodi neque dolores tempore temporibus deleniti? Nobis, ratione hic error quis cum neque nulla laudantium nostrum sit nihil dolorum quisquam enim quaerat, eaque ex sequi, harum totam quia non! Labore, neque! Amet voluptatem illo similique recusandae! Ex quaerat quibusdam asperiores, ducimus tempore magni labore. Tenetur voluptas, quos ex repellendus provident mollitia laboriosam adipisci alias a impedit, cum accusamus rerum delectus eaque facilis veniam quia laborum incidunt ea assumenda! Eos magni aspernatur quod distinctio.</p>
      </div>
    </div>
 


  </div>


  )
}

export default Page

