import { NextComponentType } from 'next';
import React from 'react';

export const ToGalleryInfo: NextComponentType = () => {
  return (
    <div className='font-sans duration-500 '>
      <div className='uppercase text-white font-mono'>Now Open</div>
      <div className='tracking-tighter uppercase text-white font-mono text-2xl font-semibold'>
        The gallery
        <span className='opacity-20 tracking-wide'>{'//'}</span>
      </div>
    </div>
  );
};
