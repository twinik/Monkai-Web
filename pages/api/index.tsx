import { NextApiRequest, NextApiResponse } from 'next';
import { getMints } from '../../utils/get-mints';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await getMints(
    '8J9W44AfgWFMSwE4iYyZMNCWV9mKqovS5YHiVoKuuA2b',
    'https://api.metaplex.solana.com'
  );

  return res.status(200).json({
    message: 'gotten all mints',
  });
}
