import React from "react";
import divider from "./../../../public/images/divider.svg";
import compass from "./../../../public/images/icons8-compass-100.png";
import metal from "./../../../public/images/icons8-metal-100.png";
import newWorld from "./../../../public/images/icons8-new-world-100.png";
import book from "./../../../public/images/icons8-open-book-100.png";
import Image from "next/image";

export default function Perks() {
  return (
    <div id="basics" className="section light survival-about wf-section">
      <div
        data-w-id="377c8b3d-41b2-ef55-52c1-7f9dfadaea14"
        style={{
          opacity: "1",
          transform:
            "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
          transformStyle: "preserve-3d",
        }}
        className="container"
      >
        <div className="row-2 _3 w-row">
          <div className="w-col w-col-4 w-col-stack">
            <div className="mb-40">
              <div className="text-highlight primary mb-10">PERKS</div>
              <h5 className="text-white-2-copy">
                PERKS&nbsp;OF&nbsp;OWNING&nbsp;
                <br />
                A&nbsp;DIVINE&nbsp;ANARCHY
                <br />
              </h5>
              <Image
                src={divider}
                width={200}
                height={10}
                loading="lazy"
                alt=""
                className="mb-20 red"
              />
            </div>
          </div>
          <div className="w-col w-col-8 w-col-stack">
            <div className="row-2 survival-about-row w-row">
              <div className="w-col w-col-6 w-col-stack w-col-small-small-stack w-col-tiny-tiny-stack">
                <div className="survival-about-item">
                  <div className="survival-about-item-header">
                    <Image
                      src={compass}
                      loading="lazy"
                      width={50}
                      height={50}
                      alt=""
                      className="survival-about-item-icon"
                    />
                    <h6 className="text-white-2 mb-0 left">
                      POLITICAL&nbsp;<span>INFLUENCE</span>
                    </h6>
                  </div>
                  <p className="mb-0 text-small">
                    Players get access to private chatrooms where they can
                    trade, converse, and build a new paradigm of governance.
                  </p>
                </div>
              </div>
              <div className="w-col w-col-6 w-col-stack w-col-small-small-stack w-col-tiny-tiny-stack">
                <div className="survival-about-item">
                  <div className="survival-about-item-header">
                    <Image
                      src={metal}
                      loading="lazy"
                      width={50}
                      height={50}
                      alt=""
                      className="survival-about-item-icon"
                    />
                    <h6 className="text-white-2 mb-0 left">EXCLUSIVE RIGHTS</h6>
                  </div>
                  <p className="mb-0 text-small">
                    When you acquire a Divine Anarchy NFT you own the exclusive
                    rights to that NFT for personal and commercial use.
                  </p>
                </div>
              </div>
            </div>
            <div className="row-2 survival-about-row w-row">
              <div className="w-col w-col-6 w-col-stack">
                <div className="survival-about-item">
                  <div className="survival-about-item-header">
                    <Image
                      src={newWorld}
                      loading="lazy"
                      width={50}
                      height={50}
                      alt=""
                      className="survival-about-item-icon"
                    />
                    <h6 className="text-white-2 mb-0 left">
                      SAND&nbsp;BOX&nbsp;EFFECT
                    </h6>
                  </div>
                  <p className="mb-0 text-small">
                    Join us in making NFT history by sculpting the future of the
                    Divine Anarchy storyline with your participation and
                    influence.
                  </p>
                </div>
              </div>
              <div className="w-col w-col-6 w-col-stack">
                <div className="survival-about-item">
                  <div className="survival-about-item-header">
                    <Image
                      src={book}
                      loading="lazy"
                      width={50}
                      height={50}
                      alt=""
                      className="survival-about-item-icon"
                    />
                    <h6 className="text-white-2 mb-0 left">
                      KINGDOM&nbsp;PERKS
                    </h6>
                  </div>
                  <p className="mb-0 text-small">
                    Special real life- rewards, airdrops, and access to a
                    members-only shop with limited edition drops designed in
                    Europe.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
