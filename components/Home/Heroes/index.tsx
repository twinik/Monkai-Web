import React from "react";
import yokai from "./../../../public/images/yokai.png";
import monkai from "./../../../public/images/monkai.png";
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
        <div className="yokai-container">
          <div className="section-display left">
            <div className="text-display dark">YOKAI</div>
          </div>
          <div className="flex-columns row w-row">
            <div className="column-9 w-col w-col-5">
              <h3 className="text-white mb-20">YOKAI</h3>
              <h3 className="nemesis-text mb-20">妖怪</h3>
              <p className="text-white mb-40">
                The dignified yokai lineage has ruled dominant for centuries.
                Holding their heads high and ruling their land with mythological
                command. The egoism that followed has bred impending darkness
                and corruption amongst their ranks.
              </p>
            </div>
            <div className="column-16 w-col w-col-7">
              <Image
                src={yokai}
                loading="lazy"
                width={450}
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
        <div className="monkai-container">
          <div className="section-display left">
            <div className="text-display-copy dark">MONKAI</div>
          </div>
          <div className="flex-columns row flex-reverse w-row">
            <div className="column-10 w-col w-col-5">
              <h3 className="text-white mb-20">MONKAI</h3>
              <h3 className="hero-text mb-20">モンカイ</h3>
              <p className="text-white mb-40">
                Underestimated for millennials for their lethargic methods of
                governance, the monkai has always been known for their passive
                demeanours. However, don't let that fool you, their power is
                concealed behind their apathetic smiles.
              </p>
            </div>
            <div className="column-17 w-col w-col-7">
              <Image
                src={monkai}
                loading="lazy"
                width={3264}
                height={3284}
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
