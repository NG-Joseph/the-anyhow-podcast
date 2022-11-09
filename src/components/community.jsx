import React from 'react'
import {motion} from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import images from '../components/images'



const Slider = () => {
 
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  },[])

  return (
    <div className=' bg-[#F5F5F5] py-48 px-4 '>

<div>
        <h1 className='text-black text-center font-medium text-3xl py-8'>Community</h1>
    </div>



        <motion.div ref={carousel} className=' cursor-grab overflow-hidden ' >
          <motion.div 
          drag="x"
          dragConstraints={{right: 0, left: -width}}
           className='flex'>
            {images.map(image => {
              return(
                <motion.div key={image} className=' min-h-[40rem] min-w-[30rem] p-[40px]'> 
                  <img className='w-[283px] h-[283px] rounded-[2rem] pointer-events-none' src={image} alt="" />
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
    </div>
    
    
    
  )
}

export default Slider