import React from 'react'
import Listen from '../img/listen.png'
import Design from '../img/design.jpg'

const page = () => {
  return (
    <div className=' bg-[#F5F5F5] py-12 px-4  '>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
          <div>
          <h1 className=' text-4xl text-black pb-6'>No. 1 <p className='text-4xl text-[#DF0086]'>pidgin podcast</p> in the world</h1>
            <p>A couple of unfiltered lagos boys telling it as it is. The Boiz created a new genre of podcast, just for Nigerian people</p>
           <a href="/episode"><img className=' w-[337px] cursor-pointer ' src={Listen} alt="" /></a> 
          </div>

          <img src={Design} alt="" />
        </div>
    </div>
  )
}

export default page