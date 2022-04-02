import { NextComponentType } from "next";
import React, { useEffect, useState } from "react";
import { useNFTS } from "../../../hooks/useNFTS";
import { NFT } from "../../../models/nft";

const initialState = {
  nfts: [],
  loading: false,
  addMore: false,
  setAddMore: (more: boolean) => {
    !more;
  },
};

export const GalleryProviderContext = React.createContext<{
  nfts: any[];
  loading: boolean;
  addMore: boolean;
  setAddMore: any;
}>(initialState);

export const GalleryProvider: NextComponentType = ({ children }) => {
  const [addMore, setAddMore] = useState<boolean>(false);
  const { nfts, loading } = useNFTS(addMore);

  /* setAuthenticated(nft); */

  return (
    <GalleryProviderContext.Provider
      value={{
        nfts,
        loading,
        addMore,
        setAddMore,
      }}
    >
      {children}
    </GalleryProviderContext.Provider>
  );
};
