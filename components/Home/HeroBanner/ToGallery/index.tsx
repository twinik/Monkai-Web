import React from 'react';

// Components
import { ToGalleryButton } from './ToGalleryButton';
import { ToGalleryContainer } from './ToGalleryContainer';
import { ToGalleryInfo } from './ToGalleryInfo';

export const ToGallery = () => {
  return (
    <ToGalleryContainer>
      <ToGalleryInfo />
      <ToGalleryButton />
    </ToGalleryContainer>
  );
};
