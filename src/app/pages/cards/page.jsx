import React from 'react'
import data from  '@/app/components/slider/data'
import Slider from  '@/app/components/slider/slider'
const Page = () => {
    console.log(data,'data--------------')
  return (
     <div  className='m-auto w-full h-fit  '>
      <Slider  data={data} activeSlide={2} />
    </div>
  )
}

export default Page