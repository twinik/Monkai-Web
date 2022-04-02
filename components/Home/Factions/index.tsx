import React from "react";
import closeModal from "./../../../public/images/close-modal.svg";
import divider from "./../../../public/images/divider.svg";
import nemesisTwo from "./../../../public/images/nemesis-2.png";
import agarthian from "./../../../public/images/F-H-Agarthian.png";
import Image from "next/image";

export default function Factions() {
  return (
    <div id="factions" className="choose-your-side wf-section">
      <div className="container"></div>
      <div className="container">
        <div className="center-block mb-60">
          <div className="text-highlight small primary mb-10">
            CHOOSE&nbsp;YOUR&nbsp;SIDE
          </div>
          <h4 className="text-white-3">
            AN&nbsp;EPIC&nbsp;CRYPTOVERSE EXPERIENCE
          </h4>
          <p className="text-white-opacity-2 text-small">
            16,012 unique characters available at mint. Once all players are
            locked in, the game will begin. Stick with your randomized mint
            faction or exchange it in the aftermarket to build out your ideal
            game strategy by collecting the characters of your choice. When
            buying a Divine Anarchy NFT you are granted access to the game but
            also to private areas created as the head quarters of each faction.
          </p>
        </div>
        <div
          data-duration-in="300"
          data-duration-out="100"
          data-current="Tab 1"
          data-easing="ease"
          className="strategy-races-tabs w-tabs"
        >
          <div className="strategy-races-tabs-menu w-tab-menu" role="tablist">
            <a
              data-w-tab="Tab 1"
              className="nemesis-tag w-inline-block w-tab-link w--current"
              id="w-tabs-0-data-w-tab-0"
              href="https://web.archive.org/web/20211016062225/https://www.divineanarchy.com/"
              role="tab"
              aria-controls="w-tabs-0-data-w-pane-0"
              aria-selected="true"
            >
              <Image
                src={closeModal}
                loading="lazy"
                width="50"
                alt=""
                className="strategy-races-tabs-menu-item-icon"
              />
            </a>
            <a
              data-w-tab="Tab 3"
              className="heroes-tag w-inline-block w-tab-link"
              tabIndex={-1}
              id="w-tabs-0-data-w-tab-1"
              href="https://web.archive.org/web/20211016062225/https://www.divineanarchy.com/"
              role="tab"
              aria-controls="w-tabs-0-data-w-pane-1"
              aria-selected="false"
            >
              <Image
                src={closeModal}
                loading="lazy"
                width="50"
                alt=""
                className="strategy-races-tabs-menu-item-icon"
              />
            </a>
          </div>
          <div className="strategy-races-tabs-content w-tab-content">
            <div
              data-w-tab="Tab 1"
              className="strategy-races-tabs-content-item _1 w-tab-pane w--tab-active"
              id="w-tabs-0-data-w-pane-0"
              role="tabpanel"
              aria-labelledby="w-tabs-0-data-w-tab-0"
            >
              <div className="flex-columns w-row">
                <div className="w-col w-col-6 w-col-medium-6 w-col-tiny-tiny-stack">
                  <h3 className="text-white-3">NEMESIS</h3>
                  <Image
                    src={divider}
                    loading="lazy"
                    alt=""
                    className="mb-20"
                  />
                  <p className="text-white-opacity-2 mb-20">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla,
                    ut commodo diam libero vitae erat.
                  </p>
                  <a href="#" className="learn-more-link-2 mb-40">
                    MINT YOURS&nbsp;TODAY
                  </a>
                </div>
                <div className="align-right w-col w-col-6 w-col-medium-6 w-col-tiny-tiny-stack">
                  <Image
                    src={nemesisTwo}
                    loading="lazy"
                    width="674"
                    sizes="100vw"
                    alt=""
                    className="strategy-races-tabs-content-image"
                  />
                </div>
              </div>
            </div>
            <div
              data-w-tab="Tab 3"
              className="strategy-races-tabs-content-item _3 w-tab-pane"
              id="w-tabs-0-data-w-pane-1"
              role="tabpanel"
              aria-labelledby="w-tabs-0-data-w-tab-1"
            >
              <div className="flex-columns w-row">
                <div className="w-col w-col-6">
                  <h3 className="text-white-3">HEROES</h3>
                  <Image
                    src={divider}
                    loading="lazy"
                    alt=""
                    className="mb-20 red"
                  />
                  <p className="text-white-opacity-2 mb-20">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla,
                    ut commodo diam libero vitae erat.
                  </p>
                  <a href="#" className="learn-more-link-2 mb-40 red">
                    MINT&nbsp;YOURS&nbsp;TODAY
                  </a>
                </div>
                <div className="align-right w-col w-col-6">
                  <Image
                    src={agarthian}
                    loading="lazy"
                    width="436"
                    sizes="100vw"
                    alt=""
                    className="strategy-races-tabs-content-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
