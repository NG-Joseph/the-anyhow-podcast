import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactPlayer from 'react-player'

import {Container} from 'react-bootstrap'
const video = () => {
  return (
    <div className='item-center  bg-[rgb(245,245,245)] flex flex-col'>

        <div className='lg:pl-80 lg:pb-4 md:pl-48 lg:w-[70%]'>
        <ReactPlayer url='https://www.youtube.com/watch?v=t1yNKijequw&t=1736s' width="98%" />
        </div>
               
        
       

    </div>
  )
}

export default video