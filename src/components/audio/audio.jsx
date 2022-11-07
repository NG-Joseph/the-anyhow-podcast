import React, { useState, useRef, useEffect } from 'react'
import styles from  './player.css';
import { BsArrowLeftShort } from "react-icons/bs"
import { BsArrowRightShort } from "react-icons/bs"
import { FaPlay } from "react-icons/fa"
import { FaPause } from "react-icons/fa"
import S3_GLOBAL_PREFIX from '../../s3-global-prefix';

const Audio = S3_GLOBAL_PREFIX + "audio.mp3";




const Audioplay = () => {
  // state
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  // references
  const audioPlayer = useRef();   // reference our audio component
  const progressBar = useRef();   // reference our progress bar
  const animationRef = useRef();  // reference the animation

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  }

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying)
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  }

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  }

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
  }

  const changePlayerCurrentTime = () => {
    progressBar.current.style.setProperty('--seek-before-width', `${progressBar.current.value / duration * 100}%`)
    setCurrentTime(progressBar.current.value);
  }

  const backThirty = () => {
    progressBar.current.value = Number(progressBar.current.value - 30);
    changeRange();
  }

  // const forwardThirty = () => {
  //   progressBar.current.value = Number(progressBar.current.value + 30);
  //   changeRange();
  // }

  return (
    <div className='items-center flex flex-col'>
      <audio ref={audioPlayer} src={Audio} preload="metadata"></audio>
      <button className={styles.forwardBackward} onClick={backThirty}><BsArrowLeftShort /> 30</button>
      <button onClick={togglePlayPause} className=' border-none rounded-lg w-[75px] h-[75px] font-[16px] cursor-pointer '>
        {isPlaying ? <FaPause className='ml-5' /> : <FaPlay className='relative left-[5px] ml-5' />}
      </button>
      {/* <button className={styles.forwardBackward} onClick={forwardThirty}>30 <BsArrowRightShort /></button> */}

      {/* current time */}
      <div className='ml-[25px]'>{calculateTime(currentTime)}</div>

      {/* progress bar */}
      <div>
        <input type="range" className='relative w-[100%] h-[11px] outline-none' defaultValue="0" ref={progressBar} onChange={changeRange} />
      </div>

      {/* duration */}
      <div className={styles.duration}>{(duration && !isNaN(duration)) && calculateTime(duration)}</div>
    </div>
  )
}

export default Audioplay