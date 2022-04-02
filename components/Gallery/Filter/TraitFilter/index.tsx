import React, { useEffect, useState } from "react";
import { NextPage } from "next";

// Components
import { Accordion } from "../../../Accordion";
import { AccordionItem } from "../../../Accordion/AccordionItem";

// Constants
import { NFT_TRAITS } from "../../../../constants/nft";

interface Props {
  filterTraits: any;
  setFilterTraits: any;
  update: boolean;
  setUpdate: any;
}

export const TraitFilter: NextPage<Props> = ({
  filterTraits,
  setFilterTraits,
  update,
  setUpdate,
}) => {
  return (
    <div className="mt-8">
      {NFT_TRAITS.map((trait) => {
        return (
          <Accordion title={trait.name} content={trait.name} key={trait.name}>
            {trait.availableTraits.map((availableTrait) => (
              <AccordionItem
                trait={trait.name}
                availableTrait={availableTrait.name}
                key={availableTrait.name}
                filterTraits={filterTraits}
                setFilterTraits={(filterTraits: any) =>
                  setFilterTraits(filterTraits)
                }
                update={update}
                setUpdate={(update: string) => setUpdate(update)}
              />
            ))}
          </Accordion>
        );
      })}
    </div>
  );
};
