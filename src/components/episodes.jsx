import React from 'react'

import Audio from '../components/audio/audio'
// import {
//   styled, Typography, Slider, Paper,
//   Stack, Box
// } from '@mui/material'

const episodes = () => {
  return (
    <div className='w-[509.33]-screen bg-[#F5F5F5] py-16 px-4'>
       <h1 className='text-4xl text-center font-bold'>Latest Episodes</h1>
       <div className='text-center '>
        <h3 className='text-[#000000] font-semibold leading-6 text-2xl pt-9 '>E037 HANUJAY SUPRISES TEMI WITH A FULL HYPE SESSION!!</h3>
        <p className='text-[#000000] text-xl font-normal'>oct 8th 2022</p>

        <p className='text-[#000000] text-base font-normal pt-9'>Watch as Hanujay surprises Temi with a full hype session. Who get Dorime??</p>
       </div>
       <div className='text-center'>
       <Audio />
       </div>
        
    </div>
  )
}

export default episodes