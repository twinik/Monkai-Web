import { Connection } from '@solana/web3.js';
import { deserializeUnchecked } from 'borsh';
import { METADATA_PROGRAM_ID } from './accounts';
import { toPublicKey } from './toPublicKey';
import { Metadata, METADATA_SCHEMA } from './metadata-schema';

export const getMints = async (creatorId: string, url: string) => {
  const connection = new Connection(url);
  const a = await connection.getProgramAccounts(toPublicKey(METADATA_PROGRAM_ID), {
    encoding: 'base64',
    filters: [
      {
        memcmp: {
          offset: 326,
          bytes: creatorId
        }
      },
      {
        memcmp: {
          offset: 358, // first creator verified position
          bytes: '2' // 1 as base58 string
        }
      }
    ]
  });
  const deserialized = a.map((b) => deserializeUnchecked(METADATA_SCHEMA, Metadata, b.account.data));

  return deserialized;
};
