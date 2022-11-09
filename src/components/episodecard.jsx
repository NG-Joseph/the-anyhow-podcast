import React from 'react'
import { UseEffect } from 'react';
import { useState } from 'react'
import Pod from '../img/pod.jpg'
import { useRef } from 'react';
import S3_GLOBAL_PREFIX from '../s3-global-prefix';

const song = S3_GLOBAL_PREFIX + "audio.mp3";
const Episodecard = () => {
  const [isPlaying, setIsPlaying] = useState(false)

  const audioRef = useRef()
  const play = () => {
    const audio = audioRef.current
    audio.volume = 0.2

    if (!isPlaying) {
      setIsPlaying(true)
      audio.play()
    }
    if (isPlaying) {
      setIsPlaying(false)
      audio.pause()
    }
  }



  return (
    <div className=' grid md:grid-cols-2 bg-[#4DBF13] mb-36 '>
      <div className=' lg:ml-48 '>
        <img className=' px-3 pt-8 py-3 ' src={Pod} width={400} height={800} alt="" />
      </div>
      <div className='px-3 flex justify-center flex-col'>
        <h2 className='text-[#000000] font-semibold leading-6 text-2xl sm:text-xl pt-9'>Ep37</h2>
        <h3 className='text-[#000000] font-semibold leading-6 text-2xl sm:text-xl pt-9'>HANUJAY SUPRISES TEMI WITH A FULL HYPE SESSION!!</h3>
        <p className='text-[#000000] text-xl font-normal pt-9 sm:text-xl'>oct 8th 2022</p>
        <p className='text-[#000000] text-base font-normal pt-9 sm:text-xl'>Watch as Hanujay surprises Temi with a full hype session. Who get Dorime??</p>


        <audio src={song}
          ref={audioRef}
        ></audio>
        <div className=' py-3 flex flex-row justify-center'>
          <button onClick={play} className='rounded-xl   text-xl font-bold lg: bg-white text-black w-[200px] p-[20px] text-center border border-solid cursor-pointer border-black justify-center' >Play</button>
          {/* <a href="https://youtu.be/qtMR06Ocr9g"> <button className='rounded-xl  text-xl font-bold bg-white lg:mr-48 text-black w-[180px] p-[20px] px-3 text-center border border-solid cursor-pointer border-black' >Video</button> </a> */}
        </div>

      </div>



    </div>
  )
}

export default Episodecard