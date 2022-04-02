import React, { useState } from "react";
import Image from "next/image";
import mint from "./../../../public/images/mint.gif";

export default function Mint() {
  const [qty, setQty] = useState(1);
  const maxQty = 5;
  return (
    <div id="mint" className="section rpg-buy wf-section">
      <div
        data-w-id="eeb0db9d-1ba4-f331-23ae-af3c358e16e0"
        style={{
          opacity: "1",
          transform:
            "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
          transformStyle: "preserve-3d",
        }}
        className="container"
      >
        <div className="row-copy w-row">
          <div className="column-3 w-col w-col-6 w-col-stack flex items-center justify-center">
            <Image
              src={mint}
              width={540}
              height={540}
              alt="mint"
              className="buy-game-dvd"
            />
          </div>
          <div className="column-2 w-col w-col-6 w-col-stack">
            <div className="buy-form">
              <div className="buy-form-edition">
                <strong>
                  WHAT&nbsp;SIDE&nbsp;OF&nbsp;HISTORY&nbsp;WILL
                  YOU&nbsp;FIGHT&nbsp;FOR?
                </strong>
                <br />
              </div>
              <div className="divider mb-20"></div>
              <h4 className="text-white">MINTING&nbsp;RULES</h4>
              <p className="text-white-opacity mb-20">
                1) 16,011 unique 1 of 1 NFTs will be created at launch
                <br />
                <br />
                2) Each wallet will be able to mint a max of 20 NFTs
                <br />
                <br />
                3) Date for mint has yet TBD
                <br />‍
              </p>
              <div className="divider mb-20"></div>
              <div className="div-block-3">
                <div className="div-block-4">
                  <h1
                    className="minus"
                    onClick={() => setQty(qty > 1 ? qty - 1 : qty)}
                    style={{ cursor: "pointer" }}
                  >
                    -
                  </h1>
                  <h1 className="count">{qty}</h1>
                  <h1
                    className="plus"
                    onClick={() => setQty(qty < maxQty ? qty + 1 : qty)}
                    style={{ cursor: "pointer" }}
                  >
                    +
                  </h1>
                </div>
                <div className="max-button">
                  <div className="corner-black top-right large"></div>
                  <h1 className="max" style={{ cursor: "pointer" }}>
                    MAX
                  </h1>
                  <div className="corner-black bottom-left"></div>
                </div>
              </div>
              <div className="divider mb-20"></div>
              <div className="w-form">
                <form id="email-form" name="email-form" data-name="Email Form">
                  <h1 className="text-white">
                    <span className="text-span">PRICE:</span> 0.09&nbsp;ETH
                  </h1>
                  <button className="buy-form-submit w-button">MINT</button>
                </form>
                <div className="form-success w-form-done">
                  <div>Thank you! Your submission has been received!</div>
                </div>
                <div className="form-error w-form-fail">
                  <div>
                    Oops! Something went wrong while submitting the form.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
