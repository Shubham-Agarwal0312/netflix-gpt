import React from 'react'

const VideoTitleView = ({title, overview}) => {
  return (
    <div className='w-screen h-screen pt-48 pl-16 absolute bg-gradient-to-r from-black text-white'>
      <h1 className='text-bold text-3xl'>{title}</h1>
      <p className='w-1/2 mt-4'>{overview}</p>
      <div className='mt-8'>
        <button className='h-12 w-32 rounded bg-white text-bold text-black text-2xl'>
          {/* <img src={PLAY_BTN} className='h-6 w-6 mt-3 ml-3'/> */}
          Play
        </button>
        <button className='h-12 w-36 ml-4 rounded bg-slate-600 bg-opacity-50  text-bold text-white text-2xl'>
            More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitleView;
