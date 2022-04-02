import React, { useEffect, useState } from "react";
import { NextPage } from "next";

// Components
import Container from "../../Container";

import { Entry } from "./Entry";
import { LoadingSpinner } from "../../Loading/LoadingSpinner";
import InfiniteScroll from "react-infinite-scroll-component";

// Context
import { GalleryProviderContext } from "../../Provider/Gallery";
import { constant } from "lodash";
interface Props {
  filterTraits: any;
  filterName: string;
  update: boolean;
}

export const Entries: NextPage<Props> = ({
  filterName,
  filterTraits,
  update,
}) => {
  let { nfts, loading, addMore, setAddMore } = React.useContext(
    GalleryProviderContext
  );

  // Creates list of attributes to be use in filter
  /* useEffect((): any => {
    let attrList: any = {};
    const constants: any[] = [];
    nfts?.map((nft) => {
      nft?.attributes.map((attr: any) => {
        const trait = attr.trait_type.toLowerCase();
        const value = attr.value;

        // adds the value_type/trait
        if (!constants.some((e) => e.name === trait)) {
          constants.push({ name: trait, availableTraits: [] });
          console.log(
            constants.findIndex((e: any) => {
              return e.name === trait;
            })
          );
        }
        // if the value_type/trait exists adds the attribute/value/avaialabletraits
        const traitIndex = constants.findIndex((e: any) => {
          return e.name === trait;
        });
        if (traitIndex !== -1) {
          const valueIndex = constants[traitIndex].availableTraits.findIndex(
            (e: any) => {
              return e.name === value;
            }
          );
          // if the attribute/value/avaialabletraits doest not exists add the attribute/value/avaialabletraits
          if (valueIndex === -1) {
            constants[traitIndex].availableTraits.push({
              name: value,
              inCirculation: 1,
            });
          }
          // if the attribute/value/avaialabletraits exist adds one to incirculation
          else {
            const currentValue =
              constants[traitIndex].availableTraits[valueIndex];
            constants[traitIndex].availableTraits[valueIndex] = {
              name: value,
              inCirculation: currentValue.inCirculation + 1,
            };
          }
        }
      });
    });
    return null;
  }, [nfts]); */

  useEffect(() => {}, [filterTraits]);
  /* 
  nfts && setCurrentNFTS(addNFTS(currentNFTS)); */

  return (
    <InfiniteScroll
      dataLength={nfts.length}
      next={() => setAddMore(!addMore)}
      hasMore={true}
      loader={!loading && <h3 className="text-center mt-60"> Loading...</h3>}
      endMessage={<h4>Nothing more to show</h4>}
      className={`nfts content-start grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 col-span-12  lg:col-span-9 xl:col-span-8 xl:col-start-5 mt-6 gap-6 items-start`}
    >
      {nfts
        .filter((nft) => {
          let filter = true;
          for (var i = 0; i < 10; i++) {
            filter =
              filter &&
              nft?.attributes[i]?.value &&
              (filterTraits[nft.attributes[i].trait_type.toLowerCase()][
                nft.attributes[i].value
              ] ||
                !Object.values(
                  filterTraits[nft.attributes[i].trait_type.toLowerCase()]
                ).some((e) => e === true));
          }

          return (
            (filterName === "" ||
              nft.name.toLowerCase().includes(filterName.toLowerCase())) &&
            filter
          );
        })
        .map((nft, idx) => {
          return <Entry nft={nft} key={idx} update={update} />;
        })}
      {loading && (
        <div className="grid col-span-9 justify-center">
          <LoadingSpinner />
        </div>
      )}
    </InfiniteScroll>
  );
};
