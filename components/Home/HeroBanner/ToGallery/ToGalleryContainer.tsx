import { NextComponentType } from 'next';
import React from 'react';

export const ToGalleryContainer: NextComponentType = ({ children }) => {
  return (
    <div className='bg-red-500 w-6/12 fixed bottom-2 right-2 flex justify-between items-center shadow-sm p-4'>
      {children}
    </div>
  );
};
