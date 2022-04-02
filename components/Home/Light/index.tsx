import React from "react";
import closeModal from "./../../../public/images/close-modal.svg";
import Image from "next/image";

export default function Light() {
  return (
    <div className="section light about-fps wf-section">
      <div className="container">
        <div
          data-w-id="b584fd4d-eb95-5e41-e624-1d5d458c0780"
          style={{
            opacity: "1",
            transform:
              "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
            transformStyle: "preserve-3d",
          }}
          className="center-block-2 mb-60-copy"
        >
          <h2 className="heading-8">A Social Game Theory Experiment </h2>
          <p className="text-black-opacity mb-40 text-large">
            Divine Anarchy is a decentralized NFT experiment where we combine
            sandbox game theory and community choice to bring forth innovative
            utility, community building, and an epic adventure for all players.
            By obtaining a Divine Anarchy NFT collectibles, you can participate
            in creating the story narrative, combat other bloodlines for
            ascension, and so much more.
          </p>
          <a href="#" className="button secondary modal-action w-button">
            TRAILER&nbsp;COMING&nbsp;SOON
          </a>
          {/* 
          <div className="modal">
            <div className="modal-close">
              <Image
                src={closeModal}
                loading="lazy"
                width="20"
                alt=""
                className="modal-close-icon"
              />
            </div>
            <div className="modal-content">
              <div className="w-container">
                <div
                  style={{ paddingTop: "56.17021276595745%" }}
                  className="w-embed-youtubevideo"
                >
                  <iframe
                    src="https://www.youtube.com/embed/PWMTDRWJqu4?rel=0&amp;controls=1&amp;autoplay=0&amp;mute=0&amp;start=0"
                    frameBorder="0"
                    style={{
                      position: "absolute",
                      left: "0",
                      top: "0",
                      width: "100%",
                      height: "100%",
                      pointerEvents: "auto",
                    }}
                    allow="autoplay; encrypted-media"
                    allowFullScreen={false}
                  ></iframe>
                </div>
              </div>
            </div> 
          </div>
            */}
        </div>
      </div>
      <div className="corner-black bottom-left large"></div>
      <div className="corner-black bottom-left large"></div>
    </div>
  );
}
