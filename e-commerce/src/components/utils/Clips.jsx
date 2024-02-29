import React from 'react';
import { PlayIcon } from '@heroicons/react/24/solid';

const Clips = ({ clip, imgsrc }) => {
  return (
    <div>
      <div className='relative h-28 w-32 rounded-xl overflow-hidden group cursor-pointer transition-all duration-300 lg:w-28 md:w-24 sm:w-16 lg:h-24 md:h-14'>
        <img
          src={imgsrc}
          alt="img/clips"
          className='absolute inset-0 object-cover rounded-xl opacity-100 z-10 transition-opacity duration-500'
        />
        <div className='bg-white blur-effect-theme absolute top-5 left-10 right-0 lg:top-8 lg:left-9 sm:top-4 sm:left-5 opacity-100 z-[100] w-8 h-8 md:w-5 md:h-5 flex items-center justify-center rounded-full'>
          <PlayIcon className='icon-style md:w-3 md:h-3 text-slate-900' />
        </div>
        <video
          autoPlay={true}
          loop={true}
          muted={true}
          playsInline={true}
          className='absolute inset-0 object-cover opacity-0 z-0 group-hover:opacity-100 group-hover:z-50 rounded-xl'
        >
          <source type='video/mp4' src={clip} />
        </video>
      </div>
    </div>
  );
}

export default Clips;
