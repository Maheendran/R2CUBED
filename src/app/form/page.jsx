import React from 'react'
import Link from 'next/link'
const Page = () => {
  return (
    <div className='w-full h-screen mainbg relative'>
<div className='w-fit h-fit my-auto  absolute top-0 bottom-0 left-[2rem]'>
<p className='text-[3.5rem] text-white'>What are you searching for ?</p>
        <div className='w-fit h-fit  relative textbganimate'>
        <Link href="./contact-us">
        <p className='text-[3rem] text-white '>Say hello</p>
          </Link>  
        <div className='absolute underline w-[0.01px] rounded-lg left-0 right-0 mx-auto h-[5px] bg-white'>

        </div>
        </div>
      

        <div className='w-fit h-fit  relative textbganimate'>
          <Link href="./contact-us">
          <p className='text-[3rem] text-white '>Apply</p>

          </Link>
   
        <div className='absolute underline w-[0.01px] rounded-lg left-0 right-0 mx-auto h-[5px] bg-white'>

        </div>
        </div>
</div>
       
      
    </div>
  )
}

export default Page