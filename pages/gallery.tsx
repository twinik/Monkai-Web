import type { NextPage } from "next";
import React, { useState } from "react";

// Components
import Container from "../components/Container";
import { Entries } from "../components/Gallery/Entries";
import { Filter } from "../components/Gallery/Filter";
import { GalleryProvider } from "../components/Provider/Gallery";
// Constants
import { NFT_TRAITS } from "../constants/nft";

// Hooks
import { useVerification } from "../hooks/useVerification";

const Gallery: NextPage = () => {
  const setTraits = () => {
    const holder: any = {};
    NFT_TRAITS.map((trait) => {
      const traitname = trait.name;
      trait.availableTraits.map((availableTrait) => {
        const availableTraitname = availableTrait.name;

        holder[traitname] = {
          ...holder[traitname],
          [availableTraitname]: false,
        };
      });
    });
    return holder;
  };
  const [filterTraits, setFilterTraits] = useState<any>(setTraits());
  const { whitelisting, whitelisted, connectDiscord } = useVerification();
  const [filterName, setFilterName] = useState<string>("");
  const [update, setUpdate] = useState<any>(false);

  const CONTENT = !whitelisting ? (
    <GalleryProvider>
      <Container>
        <div className="grid grid-cols-12 gap-2 w-full text-white justify-center">
          <Filter
            filterTraits={filterTraits}
            setFilterTraits={(filterTraits: string) =>
              setFilterTraits(filterTraits)
            }
            filterName={filterName}
            setFilterName={(filterName: string) => setFilterName(filterName)}
            update={update}
            setUpdate={(update: string) => setUpdate(update)}
          />
          <Entries
            filterName={filterName}
            filterTraits={filterTraits}
            update={update}
          />
        </div>
      </Container>
    </GalleryProvider>
  ) : (
    <>Loading</>
  );

  const NON_WHITELISTED = (
    <div className="w-full flex justify-center mt-10">
      <div>
        <button
          onClick={connectDiscord}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Connect Discord
        </button>
      </div>
    </div>
  );

  return !whitelisted ? CONTENT : NON_WHITELISTED;
};

export default Gallery;
