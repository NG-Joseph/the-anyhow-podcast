import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactPlayer from 'react-player'

import {Container} from 'react-bootstrap'
const video = () => {
  return (
    <div className='item-center justify-center bg-[rgb(245,245,245)] flex flex-col'>

        <div className='lg:pl-80 lg:pb-4  lg:w-[70%] sm:w-screen justify-center item-center sm:pl-4'>
        <ReactPlayer url='https://www.youtube.com/watch?v=t1yNKijequw&t=1736s' width="100%" />
        </div>
               
        
       

    </div>
  )
}

export default video