import React from 'react'
import Sub from '../img/sub.png'
import Design from '../img/design.jpg'

const nevermiss = () => {
  return (
    <div className='pb-9'>
        <div className=' mx-auto grid md:grid-cols-2'>
          <div>
          <h1 className=' text-4xl text-black pb-6 px-3'>Never Miss An Episode</h1>
            <p className='px-3'>Get exclusive behind the scene action when you subscribe on our partreonGet exclusive behind the scene action when you subscribe on our partreonGet exclusive behind the scene action when you subscribe on our partreonGet exclusive behind the scene action when you subscribe on our partreo</p>
           <img className=' w-[337px] pt-9 py-4 ml-6 px-3 justify-center  ' src={Sub} alt="" />
          </div>

          <img  src={Design} alt="" />
        </div>
    </div>
  )
}

export default nevermiss