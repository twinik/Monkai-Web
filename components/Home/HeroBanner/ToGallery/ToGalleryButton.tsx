import { useRouter } from 'next/dist/client/router';
import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.div`
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1) !important;
`;

export const ToGalleryButton = () => {
  const { push } = useRouter();

  const onViewMonkai = () => push('/gallery');

  return (
    <ButtonContainer className='ml-auto' onClick={onViewMonkai}>
      <a className='lg:px-6 px-4 group flex shadow-me items-center justify-center lg:text-base text-2xs uppercase lg:h-12 h-12 duration-300 cursor-pointer font-bold transform border border-none text-gray-800 hover:text-black bg-white'>
        View MONKAI
        <span className=' pl-4 duration-300 transform  translate-x-0 lg:group-hover:translate-x-2'>
          <svg
            className='fill-current lg:h-4 h-3'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
          >
            <path d='M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z'></path>
          </svg>
        </span>
      </a>
    </ButtonContainer>
  );
};
