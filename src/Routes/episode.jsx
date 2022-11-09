import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import Pod from '../img/pod.jpg'
import Episodecard from '../components/episodecard'
import Episodegrid from '../components/Episodegrid'
import Nevermiss from '../components/nevermiss'

const episode = () => {
  return (
    <div className='relative items-center bg-[#4DBF13] justify-center '>
        {/* <div className=' flex text-center pt-12 '>
          <p className='font-Violet Sans font-normal text-center lg:pl-60 text-black text-3xl'>Episode 21</p>
          <p className='font-Violet Sans font-normal text-[#808080] text-3xl lg:pl-40'>Episode 22</p>


          <div className='bg-gray-200 rounded-full flex items-center px-4 ml-4 mb-1 w-[200px] sm:w-[400px] lg:w-[450px]'>
        <AiOutlineSearch size={25} />
        <input
          className='bg-transparent p-2 px-3 w-full focus:outline-none'
          type='text'
          placeholder='Search episodes'
        />
        </div>
        </div> */}

          <div className='pt-20'>
          <Episodecard  />
          </div>
       
       <div className='pt-20'>
          <Episodegrid />
       </div>
         
       <div className='pt-20'>
          <Nevermiss />
       </div>
       

    </div>
  )
}

export default episode