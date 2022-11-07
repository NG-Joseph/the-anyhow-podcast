import React from 'react'
import S3_GLOBAL_PREFIX from '../s3-global-prefix';

const comingsoon = () => {
  const videoSrc = S3_GLOBAL_PREFIX + "vid.mp4";
  return (
    <div className='w-full h-screen relative'>
      <video
        className='w-full h-full object-cover'
        src={videoSrc}
        autoPlay
        loop
        muted
      />
      <div className='absolute w-full h-full top-0 left-0 bg-gray-900/30'></div>
      <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4'>
        <h1>Anyhow Merch</h1>
        <h2 className='py-4'>Coming Soon ......</h2>

      </div>
    </div>
  );
};

export default comingsoon