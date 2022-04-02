import React from "react";
import FaqItem from "../FaqItem";
import divider from "./../../../../public/images/divider.svg";
import Image from "next/image";

export default function FAQs() {
  const faqList = [
    {
      question: "HOW MANY MINTABLE NFTS ARE THERE?",
      answer:
        "There will be 16,011 mintable NFTs available as ERC-721 tokens on the Ethereum blockchain.",
    },
    {
      question: "WHEN IS THE MINTING DATE?",
      answer:
        "The mint date has yet to be determined but we will announce it on all our mediums of communication.",
    },
    {
      question: "WHAT IS THE MINTING PRICE?",
      answer:
        "The mint price per Divine Anarchy NFT is 0.09 ETH but is subject to change depending on the price of ETH at launch.",
    },
    {
      question: "WHAT IS THE VERIFIED SMART CONTRACT ADDRESS?",
      answer:
        "Please check back once the smart contract has been published. We will not DM you a site link or a smart contract address. Please be aware of potential scams and always verify with our website for final resolve.",
    },
  ];
  return (
    <div
      id="FAQ"
      data-w-id="e764ecba-9c5e-19c7-dd58-99d65a9715bf"
      style={{
        opacity: "1",
        transform:
          "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
        transformStyle: "preserve-3d",
      }}
      className="section-inner primary-bordered _2"
    >
      <h3 className="text-white-2">
        FREQUENTLY&nbsp;ASKED&nbsp;<span>QUESTIONS</span>
      </h3>
      <Image
        src={divider}
        loading="lazy"
        width={200}
        height={10}
        alt=""
        className="mb-20 red"
      />
      {faqList.map((item) => {
        return <FaqItem item={item} key={item.question} />;
      })}
    </div>
  );
}
