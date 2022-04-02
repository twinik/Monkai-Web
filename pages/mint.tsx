import type { NextPage } from 'next';
import React from 'react';

const image =
  'https://cdn.discordapp.com/attachments/923210472453447751/941309723041468426/MANKI_2.png';

const nftImage =
  'https://cdn.discordapp.com/attachments/923210472453447751/946621340377579600/1F0C2EEC-28F2-4D0C-AE94-46DB85C56480.jpg';

const Mint: NextPage = () => {
  return (
    <div>
      <div className='flex justify-center mt-10'>
        <div className=' w-2/12'>
          <img src={image} alt='' />
        </div>
      </div>
      <div className='text-center tracking-wider uppercase text-black font-tsuki text-5xl font-semibold'>
        CLAIM YOUR MONKAI
      </div>

      <div className='flex justify-center mt-8'>
        <div className='flex justify-between w-5/12'>
          <div className='font-mono'>Total Supply : 169 NFT's</div>
          <div className='font-mono'>1 Monkai / Person</div>
        </div>
      </div>

      <div className='flex justify-center mt-4'>
        <div className='flex justify-between border-dashed border-2 border-black w-5/12'>
          <div className='p-4 w-4/12'>
            <img src={nftImage} alt='' />
          </div>
          <div className='p-4 align-middle'>
            <div className='font-mono'>Price per Monkai</div>
            <div className='font-mono'>0.69 ETH</div>
            <div className='font-mono'>Live now</div>
          </div>
        </div>
      </div>

      <div className='flex justify-center mt-4'>
        <div className='w-5/12 flex justify-between'>
          <div className='font-mono text-2xl'>Total</div>
          <div className='font-mono text-2xl'>0.69 ETH</div>
        </div>
      </div>

      <div className='flex justify-center mt-4'>
        <div className='w-5/12 flex justify-center'>
          <button className='bg-transparent border-black border-2  hover:bg-orange-800 hover:text-white font-mono text-black font-bold py-2 px-4 rounded w-5/12'>
            CONNECT SOLANA
          </button>
        </div>
      </div>

      <div className='flex justify-center mt-4'>
        <div className='w-5/12 flex justify-center'>
          <button className='bg-transparent border-black border-2  hover:bg-orange-800 hover:text-white font-mono text-black font-bold py-2 px-4 rounded w-5/12'>
            CONNECT ETHEREUM
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mint;
