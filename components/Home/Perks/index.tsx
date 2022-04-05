import React from "react";
import divider from "./../../../public/images/divider.svg";
import compass from "./../../../public/images/icons8-compass-100.png";
import metal from "./../../../public/images/icons8-metal-100.png";
import newWorld from "./../../../public/images/icons8-new-world-100.png";
import book from "./../../../public/images/icons8-open-book-100.png";
import Image from "next/image";
import ethLogo from "../../../assets/images/ethereum_logo_icon_1711474 (1).png";
import solanaLogo from "../../../assets/images/Solana_Logo_2021_Color (1).png";
import breedingImg from "../../../assets/images/perks-breeding.jpg";
import printsImg from "../../../assets/images/perks-prints.jpg";
import rewardImg from "../../../assets/images/perks-rewards.jpg";
import stakingImg from "../../../assets/images/perks-staking.jpg";

export default function Perks() {
  return (
    <div className="perks-container">
      <h3 className="perks-heading">Multi-Chain Perks</h3>
      <div className="perks-grid">
        <div className="perk">
          <div className="perk-icon">
            <Image width={50} height={50} src={breedingImg} />
          </div>
          <h4 className="perk-title">Breeding</h4>
          <p className="perk-text">
            If you own two or more monkai nfts you can breed them to create a
            new unique monkai nft. This will allow holders to have nfts that are
            special to them!
          </p>
        </div>
        <div className="perk">
          <div className="perk-icon">
            <Image width={50} height={50} src={printsImg} />
          </div>
          <h4 className="perk-title">Prints</h4>
          <p className="perk-text">
            Monkai holders will receive prints of their individual nfts. This
            will ensure that our holders can pride themselves in owning their
            nfts and enjoy it as its own piece of art.
          </p>
        </div>
        <div className="perk">
          <div className="perk-image">
            <Image height={150} width={350} src={ethLogo} objectFit="contain" />
          </div>
        </div>
        <div className="perk">
          <div className="perk-icon">
            <Image width={50} height={50} src={rewardImg} />
          </div>
          <h4 className="perk-title">Reward holders</h4>
          <p className="perk-text">
            You guessed it! If holders own three or more Monkai nfts they will
            receive a free nft from the third mint. I bet you'll be excited for
            that one!
          </p>
        </div>
        <div className="perk">
          <div className="perk-icon">
            <Image width={70} height={50} src={stakingImg} />
          </div>
          <h4 className="perk-title">Staking</h4>
          <p className="perk-text">
            Holders will be able to stake their Monkai Nfts to gain passive
            income from the Monkai token.
          </p>
        </div>
        <div className="perk">
          <div className="perk-image">
            <Image
              height={150}
              width={350}
              src={solanaLogo}
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
