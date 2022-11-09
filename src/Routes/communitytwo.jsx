import React from 'react'
import Follow from '../img/follow.png'
import Design from '../img/design.jpg'
import VideoPlayer from 'react-video-js-player'

import Fame from '../components/fame'
import S3_GLOBAL_PREFIX from '../s3-global-prefix'

const communitytwo = () => {
  const videoSrc = S3_GLOBAL_PREFIX + "bck.mp4"//bg;

  return (
    <div className='py-12 px-4 bg-[#4DBF13] items-center justify-center'>

      <VideoPlayer
        src={videoSrc}
        width="338"
        height="420"
        className=" block ml-auto mr-auto rounded-xl justify-center md:w-[700px]  "
      />
      <div className='pt-9 text-center'>
        <img className=' w-[1020px] mx-auto  text-center ' src={Follow} alt="" />
      </div>
      <div>
        <h1 className='mx-auto pl-9 pt-8 font-semibold text-2xl'>Member Spotlight</h1>
      </div>
      <div className='max-w-[1240px] mx-auto grid  md:grid-cols-2 pt-9'>

        <img className='w-[1020px] h-[503px] mx-auto my-4 ' src={Design} alt='/' />


        <div className='flex flex-col border border-black  h-[500px] lg:ml-56'>

          <h1 className='font-bold text-3xl pt-6 pl-4'>News Feed</h1>

          <p className=' pl-14 pt-12 text-center font-bold text-[15px] w-[331px] h-[48px]'>Preoder swag from store and get 20% off use code “hype33”</p>
          <p className=' pl-14 pt-12 text-center font-bold text-[15px] w-[331px] h-[48px]'>Preoder swag from store and get 20% off use code “hype33”</p>
          <p className=' pl-14 pt-12 text-center font-bold text-[15px] w-[331px] h-[48px]'>Preoder swag from store and get 20% off use code “hype33”</p>
          <p className=' pl-14 pt-12 text-center font-bold text-[15px] w-[331px] h-[48px]'>Preoder swag from store and get 20% off use code “hype33”</p>
          <p className=' pl-14 pt-12 text-center font-bold text-[15px] w-[331px] h-[48px]'>Preoder swag from store and get 20% off use code “hype33”</p>
          <p className=' pl-14 pt-12 text-center font-bold text-[15px] w-[331px] h-[48px]'>Preoder swag from store and get 20% off use code “hype33”</p>

        </div>
      </div>

      <div className='pl-9'>
        <h2 className='Font-normal text-xl py-4'> About Our Community </h2>
        <p className=' pt-4 font-[24px] indent-1 py-4 leading-8 '>The Anyhow wrld is a space where everyone is welcome. we are building a 100% safe space
          for everyone to come in and safely express their different opinions without fear of being invaded, insulted or looked down in any way. The vision
          behind the anyhow wrld is for us to inspire all our citizens to be themselves and be the best </p>
      </div>

      <Fame />
    </div>
  )
}

export default communitytwo