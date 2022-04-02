import React from "react";
import nemesis from "./../../../public/images/nemesis.png";
import heroes from "./../../../public/images/heroes.png";
import Image from "next/image";

export default function Heroes() {
  return (
    <div>
      <div
        data-w-id="b412ba31-d5c1-c41d-d986-e74b39f2c6ed"
        style={{
          opacity: "1",
          transform:
            "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
          transformStyle: "preserve-3d",
        }}
        className="heroes wf-section"
      >
        <div className="container">
          <div className="section-display left">
            <div className="text-display dark">NEMESIS</div>
          </div>
          <div className="flex-columns row w-row">
            <div className="column-9 w-col w-col-5">
              <h3 className="nemesis-text mb-20">ネメシス</h3>
              <h3 className="text-white mb-20">NEMESIS</h3>
              <p className="text-white-opacity mb-40">
                Each bloodline has a dark force that seeks its way to power. As
                long as there is a concept of victors the vanquished will also
                exist.{" "}
              </p>
            </div>
            <div className="column-16 w-col w-col-7">
              <Image
                src={nemesis}
                loading="lazy"
                width={500}
                height={600}
                alt=""
                className="heroes-image"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        data-w-id="dc487cb3-9525-3038-49f2-e78596757f29"
        style={{
          opacity: "1",
          transform:
            "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
          transformStyle: "preserve-3d",
        }}
        className="nemesis2 wf-section"
      >
        <div className="container">
          <div className="section-display left">
            <div className="text-display-copy dark">HEROES</div>
          </div>
          <div className="flex-columns row flex-reverse w-row">
            <div className="column-10 w-col w-col-5">
              <h3 className="hero-text mb-20">ヒーローズ</h3>
              <h3 className="text-white mb-20">HEROES</h3>
              <p className="text-white-opacity mb-40">
                Honor, dignity, and loyalty mark the ways of a hero. All nations
                have an opposing force to darkness. When awakened will impart
                justice, peace, and equanimity.
              </p>
            </div>
            <div className="column-17 w-col w-col-7">
              <Image
                src={heroes}
                loading="lazy"
                width={650}
                height={650}
                alt=""
                className="heroes-image _2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
