import React from 'react'
import Pic1 from '../img/pic1.jpg'
import Pic2 from '../img/pic2.jpg'
import Banner from '../img/Frame.png'

const fame = () => {
  return (
    <div className='max-w-[1040px] lg:m-6 lg:ml-6  py-16 text-center justify-center items-center'>
      <div className='text-center justify-center'>
      <h1 className='font-bold text-3xl text-center lg:ml-20'>Hall Of Fame</h1>
      </div>
        
        <div className=' rounded-lg shadow-md w-full  lg:m-6 lg:ml-20 overflow-hidden lg:flex-col  justify-center items-center text-center'>
                <img  className=' justify-center items-center' src={Pic1} alt="" />
            </div>

            <div className=' rounded-lg shadow-md lg:m-6 w-full py-3 lg:ml-20 overflow-hidden lg:flex-col  justify-center items-center'>
                <img src={Pic2} alt="" />
            </div>

            <div className='flex flex-col rounded-lg lg:m-6 shadow-md w-full  overflow-hidden sm:w-52'>
                <p>

                </p>
            </div>

            <div className='pt-8 items-center justify-center m-6 ml-20' >
              <img className='w-[1509px] justify-center' src={Banner} alt="" />
            </div>
    </div>
  )
}

export default fame