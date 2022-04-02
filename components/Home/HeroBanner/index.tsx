import React from "react";
import styled from "styled-components";
import { homeBgArt } from "../../../constants/images";
import { ToGallery } from "./ToGallery";
import horn from "./../../../public/images/horn.png";
import divider from "./../../../public/images/divider.svg";
import Image from "next/image";

const HeroContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${homeBgArt});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const HeroBanner = () => {
  return (
    /* 
    <HeroContainer>
      <ToGallery />
    </HeroContainer> */
    <div
      data-w-id="428a1c2b-9a0b-0772-f733-bbf1cc7eefa7"
      style={{
        opacity: "1",
        transform:
          "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
        transformStyle: "preserve-3d",
      }}
      className="container"
    >
      <div className="div-block-6">
        <div className="left-hero">
          <div className="text-highlight black mb-10 _2">MONKAI</div>
          <h1 className="mb-10">
            JUDGEMENT&nbsp;HAS&nbsp;<span>COME</span>
          </h1>
          <Image
            src={divider}
            width={200}
            height={10}
            alt=""
            className="mb-20 red"
            layout="responsive"
          />
          <p className="text-black-opacity mb-40">
            Divine Anarchy is the first attempt at an in game governance NFT
            that will act as an experimental catalyst for open source tribe
            formation. Such methodology implies political organizations,
            interest groups, pseudo-anonymous alliances, and a battle of
            influence throughout a dynamic social network system.
          </p>
          <div className="button-group mb-10">
            <div className="modal ">
              <div className="modal-close  ">
                <Image
                  src={horn}
                  width={100}
                  height={150}
                  alt=""
                  layout="responsive"
                  className="modal-close-icon "
                />
              </div>
            </div>
            <a
              href="https://discord.gg/gbf22keWPq"
              className="custom-button primary w-inline-block"
            >
              <div className="custom-button-hover white"></div>
              <div className="corner-black top-left small"></div>
              <div className="corner-black bottom-right small"></div>
              <div className="custom-button-text-2">DISCORD</div>
            </a>
            <a
              href="https://twitter.com/divineanarchy"
              className="custom-button primary secondary w-inline-block"
            >
              <div className="custom-button-hover white"></div>
              <div className="corner-black top-left small"></div>
              <div className="corner-black bottom-right small"></div>
              <div className="custom-button-text-2">TWITTER</div>
            </a>
          </div>
        </div>
        <div className="right-hero w-3/12 ">
          <Image
            src={horn}
            width={150}
            height={150}
            alt=""
            layout="responsive"
            className="image-6 w-3/12"
          />
        </div>
      </div>
    </div>
  );
};
