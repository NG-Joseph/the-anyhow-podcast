import React, { useRef, useState } from 'react'
import Pod from '../img/pod.jpg'
import { AiOutlinePlayCircle, AiOutlinePauseCircle } from 'react-icons/ai'
import S3_GLOBAL_PREFIX from '../s3-global-prefix'


// dictionary of episodes and their aws s3 file urls
const audioObj = {
    ep20: ""
}




const Episodegrid = () => {
    //const [ isPlaying, setIsPlaying] = useState(false)

    let episode20 = new Audio(S3_GLOBAL_PREFIX + "ep20.mp3");
    let episode18 = new Audio(S3_GLOBAL_PREFIX + "ep18.mp3");
    let episode17 = new Audio(S3_GLOBAL_PREFIX + "ep17.mp3");
    let episode16 = new Audio(S3_GLOBAL_PREFIX + "ep16.mp3");
    let episode15 = new Audio(S3_GLOBAL_PREFIX + "ep15.mp3");
    let episode14 = new Audio(S3_GLOBAL_PREFIX + "ep14.mp3");


    const play20 = () => {

        episode20.play()
    }

    const play200 = () => {
        episode20.pause()
    }

    const play18 = () => {
        episode18.play()
    }

    const play180 = () => {
        episode18.pause()
    }



    const play17 = () => {
        episode17.play()
    }

    const play170 = () => {
        episode17.pause()
    }

    const play16 = () => {
        episode16.play()
    }

    const play160 = () => {
        episode16.pause()
    }

    const play15 = () => {
        episode15.play()
    }

    const play150 = () => {
        episode15.pause()
    }

    const play14 = () => {
        episode14.play()
    }

    const play140 = () => {
        episode14.pause()
    }

    //     const audioElem = useRef()
    //    const audioRef = useRef()
    //   const play = () => {
    //     const audio = audioRef.current
    //     audio.volume = 0.2

    //     if (!isPlaying) {
    //       setIsPlaying(true)
    //       audio.play()
    //     }
    //     if (isPlaying) {
    //       setIsPlaying(false)
    //       audio.pause()
    //     }
    //   }








    return (
        <div>


            <div className='max-w-[1240px] mx-auto px-4 py-15 grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>

                <div className='relative'>
                    <img src={Pod} alt="/" />
                    <div className='flex flex-1 '>
                        <p className='left-4 bottom-4 text-2xl text-white absolute font-bold' >Ep20</p>
                        <div>


                            <AiOutlinePauseCircle onClick={play200} size={48} className='cursor-pointer  align-middle text-center absolute left-56 text-white  bottom-6' />
                            <AiOutlinePlayCircle onClick={play20} size={48} className=' cursor-pointer  align-middle text-center absolute left-72 text-white  bottom-6' />


                        </div>
                    </div>

                </div>

                <div className='relative'>
                    <img src={Pod} alt="/" />
                    <div className='bg-gray-900/30 absolute'>
                        <p className='left-4 bottom-4 text-2xl text-white absolute font-bold'>Ep18</p>
                    </div>

                    <div>



                        <AiOutlinePauseCircle onClick={play180} size={48} className='cursor-pointer  align-middle text-center absolute left-56 text-white  bottom-6' />
                        <AiOutlinePlayCircle onClick={play18} size={48} className=' cursor-pointer  align-middle text-center absolute left-72 text-white  bottom-6' />


                    </div>

                </div>


                <div className='relative'>
                    <img src={Pod} alt="/" />
                    <div className='bg-gray-900/30 absolute'>
                        <p className='left-4 bottom-4 text-2xl text-white absolute font-bold'>Ep17</p>
                    </div>

                    <div>
                        <AiOutlinePauseCircle onClick={play170} size={48} className='cursor-pointer  align-middle text-center absolute left-56 text-white  bottom-6' />
                        <AiOutlinePlayCircle onClick={play17} size={48} className=' cursor-pointer  align-middle text-center absolute left-72 text-white  bottom-6' />
                    </div>
                </div>

                <div className='relative'>
                    <img src={Pod} alt="/" />
                    <div className='bg-gray-900/30 absolute'>
                        <p className='left-4 bottom-4 text-2xl text-white absolute font-bold'>E16</p>
                    </div>

                    <div>
                        <AiOutlinePauseCircle onClick={play160} size={48} className='cursor-pointer  align-middle text-center absolute left-56 text-white  bottom-6' />
                        <AiOutlinePlayCircle onClick={play16} size={48} className=' cursor-pointer  align-middle text-center absolute left-72 text-white  bottom-6' />
                    </div>
                </div>

                <div className='relative'>
                    <img src={Pod} alt="/" />
                    <div className='bg-gray-900/30 absolute'>
                        <p className='left-4 bottom-4 text-2xl text-white absolute font-bold'>Ep15</p>
                    </div>

                    <div>
                        <AiOutlinePauseCircle onClick={play150} size={48} className='cursor-pointer  align-middle text-center absolute left-56 text-white  bottom-6' />
                        <AiOutlinePlayCircle size={48} onClick={play15} className=' cursor-pointer  align-middle text-center absolute left-72 text-white  bottom-6' />
                    </div>
                </div>

                <div className='relative'>
                    <img src={Pod} alt="/" />
                    <div className='bg-gray-900/30 absolute'>
                        <p className='left-4 bottom-4 text-2xl text-white absolute font-bold'>Ep14</p>
                    </div>

                    <div>
                        <AiOutlinePauseCircle onClick={play140} size={48} className='cursor-pointer  align-middle text-center absolute left-56 text-white  bottom-6' />
                        <AiOutlinePlayCircle size={48} onClick={play14} className=' cursor-pointer  align-middle text-center absolute left-72 text-white  bottom-6' />
                    </div>
                </div>




            </div>

            <div className='text-center pt-9'>
                <button className=' rounded-xl  text-xl font-bold bg-white text-black w-[180px] p-[20px] text-center border cursor-pointer border-black'> More episodes </button>
            </div>
        </div>
    )
}

export default Episodegrid