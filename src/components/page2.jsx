import React from 'react'
import Support from '../img/support.png'
import Patron from '../img/patron.png'

const page2 = () => {
  return (
    <div className='w-[509.33] bg-[#F5F5F5] py-16 px-4 '>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 '>
        <img className='w-[410px] h-[482px] mx-auto my-4' src={Support} alt='/' />
        <div className='flex flex-col justify-center'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Support Us On Patreon</h1>
          <p>
          Get exclusive behind the scene action when you subscribe on our partreonGet
           exclusive behind the
           scene action when you subscribe on our partreonGet exclusive
           behind the scene action when you subscribe on our partreonGet
            exclusive behind the scene action when you subscribe on our partreon
          </p>
         <a href="https://chat.whatsapp.com/Bdq9s8d8UTXHL2EDbvH95n"> <img className='w-[337px] h-[64px] mt-11 cursor-pointer' src={Patron} alt="" />  </a>
        </div>
      </div>
    </div>
  )
}

export default page2