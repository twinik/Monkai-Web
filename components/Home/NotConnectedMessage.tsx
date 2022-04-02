import React from 'react';
import styled from 'styled-components';
import Container from '../Container';

export const PrimaryMessage = styled.p`
  font-weight: 600;
`;

export const NotConnectedMessage = () => {
  return (
    <Container>
      <PrimaryMessage className='lg:text-3xl text-lg uppercase font-600'>
        {`You're currently connected to a different network.`}
        <span className='pl-2 opacity-20'>{`//`}</span>
      </PrimaryMessage>
      <p className='lg:text-base text-xs mt-4 font-400 font-mono'>
        Please change your MetaMask network to mainnet.
      </p>
    </Container>
  );
};
