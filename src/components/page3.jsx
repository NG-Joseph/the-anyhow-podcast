import React from 'react'
import Hanu from '../img/hanuu.png'
import Temi from '../img/temii.png'

const page3 = () => {
  return (
    <div className='w-[509.33] bg-[#F5F5F5] py-16 px-4 '>
      <div>
        <h1 className='text-4xl text-center font-bold'>Hang With The Boiz</h1>
      </div>
   
      <div className='flex flex-wrap justify-center '>
            <div className='flex flex-col rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52'>
                <p>
                Big shoutout to the Anyhow citizens, we keep increasing everyday.. we do this all for all of you in the community and also those who are still
                yet to join, so if you are seeing this and you are not in the community.. "i no know wetin you dey wait for".. JOIN THE ANYHOW COMMUNITY TODAY.
                </p>
            </div>

            <div className='flex flex-col rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52'>
                <img src={Hanu} alt="" />
            </div>

            <div className='flex flex-col rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52'>
                <img src={Temi} alt="" />
            </div>

            <div className='flex flex-col rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52'>
                <p>
                🤣🤣😂Please dont mind Hanujay. i want to say thank you to everyone listening to the Anyhow podcast, we love y'all. and as long as we keep doing
                this, we promise to always make it better so y'all keep smiling 😊. 
                
                </p>
            </div>
        </div>
        </div>
    



  )
}

export default page3