import React from "react";
import { NFT } from "../models/nft";
import { getNFT } from "../services/gallery";

interface UseNFTS {
  nfts: NFT[];
  loading: boolean;
}

export const useNFTS = (addMore: boolean): UseNFTS => {
  const [nfts, setnfts] = React.useState<NFT[]>([]);
  const [loading, setLoading] = React.useState(false);
  const init = async () => {
    try {
      setLoading(true);
      const { data } = await getNFT(0);

      const nftsList: NFT[] = data.map((nft: NFT) => {
        return nft;
      });

      setnfts(nftsList);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const add = async () => {
    try {
      const { data } = await getNFT(nfts.length);

      const nftsList: NFT[] = data.map((nft: NFT) => {
        return nft;
      });

      setnfts(nftsList);
    } catch (error) {
    } finally {
    }
  };

  React.useEffect(() => {
    init();
  }, []);

  React.useEffect(() => {
    add();
  }, [addMore]);

  return {
    nfts,
    loading,
  };
};
