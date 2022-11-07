import React from 'react'
import Pic1 from '../img/pic1.jpg'
import Pic2 from '../img/pic2.jpg'
import Banner from '../img/Frame.png'

const fame = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
      <div>
      <h1 className='font-bold text-3xl'>Hall Of Fame</h1>
      </div>
        
        <div className=' rounded-lg shadow-md w-full m-6 overflow-hidden lg:flex-col '>
                <img src={Pic1} alt="" />
            </div>

            <div className=' rounded-lg shadow-md w-full m-6 overflow-hidden lg:flex-col '>
                <img src={Pic2} alt="" />
            </div>

            <div className='flex flex-col rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52'>
                <p>

                </p>
            </div>

            <div className='pt-8' >
              <img className='w-[1509px]' src={Banner} alt="" />
            </div>
    </div>
  )
}

export default fame