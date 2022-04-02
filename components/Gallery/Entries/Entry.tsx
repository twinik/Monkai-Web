import React from "react";
import { NextComponentType, NextPage } from "next";

// Components
import Container from "../../Container";
import { GalleryProviderContext } from "../../Provider/Gallery";
import Image from "next/image";

import { NFT } from "../../../models/nft";

export const Entry: React.FC<{ nft: NFT; update: boolean }> = ({
  nft,
  update,
}) => {
  return nft.image ? (
    <div
      className={`nft grid col-span-1 border-b-4 border-indigo-500   ${
        update ? "appear1" : "appear2"
      }`}
    >
      <Image
        src={nft.image}
        alt={nft.name}
        width={300}
        height={300}
        className="rounded-lg"
      />
      <div className="text-white-100 text-xs font-medium uppercase mt-2.5 mb-1 font-sans">
        Monkai
      </div>
      <div className="text-white-100 font-medium uppercase mb-2">
        {nft.name}
      </div>
    </div>
  ) : (
    <div></div>
  );
};
