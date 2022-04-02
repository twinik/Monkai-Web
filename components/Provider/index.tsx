import { NextComponentType } from 'next';
import React from 'react';

export const Provider: NextComponentType = ({ children }) => {
  return <>{children}</>;
};
