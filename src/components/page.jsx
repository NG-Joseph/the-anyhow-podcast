import React from 'react'
import Listen from '../img/listen.png'
import Design from '../img/design.jpg'

const page = () => {
  return (
    <div className=' bg-[#4DBF13] py-12 px-4  '>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
          <div>
          <h1 className=' text-4xl text-black pb-6'>No. 1 <p className='text-4xl md:text-3xl text-[#DF0086]'>pidgin podcast</p> in the world</h1>
            <p className='text-3xl'>A couple of unfiltered lagos boys telling it as it is. The Boiz created a new genre of podcast, just for Nigerian people</p>
           <a href="/episode"><img className=' w-[337px] cursor-pointer py-4 justify-center md:item-center ' src={Listen} alt="" /></a> 
          </div>

          <img src={Design} alt="" />
        </div>
        
    </div>
  )
}

export default page