import React, { useState } from "react";
import genesis from "./../../../assets/images/image_8.jpg";

export default function Basics() {
  const [image, setImage] = useState("genesis");
  return (
    <div id="basics" className="section dark-copy wf-section">
      <div
        data-w-id="d248e926-3621-11a8-b7da-6c2334744893"
        style={{
          opacity: "1",
          transform:
            "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
          transformStyle: "preserve-3d",
        }}
        className="container"
      >
        <div className="center-block mb-60">
          <h3 className="hero-text mb-20">MONKAI</h3>
          <h4 className="text-white-2">Divine&nbsp;Bloodlines</h4>
          <p className="text-white-opacity text-small">
            Check out the character guide below to discover the available
            faction choices and begin preparing for an epic battle for
            sovereignty, governance, and glory. Each bloodline character will
            either be a hero or a nemesis. Which side you ending up fighting for
            is completely up to you.
            <br />
          </p>
        </div>
        <div
          data-duration-in="300"
          data-duration-out="100"
          data-current="Genesis"
          data-easing="ease"
          className="strategy-basics-tabs w-tabs"
        >
          <div className="strategy-basics-tabs-menu w-tab-menu" role="tablist">
            <button
              data-w-tab="Genesis"
              className={`strategy-basics-tabs-menu-item w-inline-block w-tab-link ${
                image === "genesis" && "w--current"
              }`}
              id="w-tabs-1-data-w-tab-0"
              role="tab"
              aria-controls="w-tabs-1-data-w-pane-0"
              aria-selected="true"
              onClick={() => setImage("genesis")}
            >
              <div className="strategy-basics-tabs-menu-item-header">
                <div className="strategy-basics-tabs-menu-item-number">01</div>
                <p className="mb-0">
                  <strong>GENESIS</strong>
                </p>
              </div>
              <div className="strategy-basics-tabs-menu-item-text text-small text-white-opacity">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </div>
            </button>
            <button
              data-w-tab="Agarthians"
              className={`strategy-basics-tabs-menu-item w-inline-block w-tab-link ${
                image === "agarthians" && "w--current"
              }`}
              tabIndex={-1}
              id="w-tabs-1-data-w-tab-1"
              role="tab"
              aria-controls="w-tabs-1-data-w-pane-1"
              aria-selected="false"
              onClick={() => setImage("agarthians")}
            >
              <div className="strategy-basics-tabs-menu-item-header">
                <div className="strategy-basics-tabs-menu-item-number">02</div>
                <p className="mb-0">
                  <strong>AGARTHIANS</strong>
                </p>
              </div>
              <div className="strategy-basics-tabs-menu-item-text text-small text-white-opacity">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </div>
            </button>
            <button
              data-w-tab="Songhai"
              className={`strategy-basics-tabs-menu-item w-inline-block w-tab-link ${
                image === "songhai" && "w--current"
              }`}
              tabIndex={-1}
              id="w-tabs-1-data-w-tab-2"
              role="tab"
              aria-controls="w-tabs-1-data-w-pane-2"
              aria-selected="false"
              onClick={() => setImage("songhai")}
            >
              <div className="strategy-basics-tabs-menu-item-header">
                <div className="strategy-basics-tabs-menu-item-number">03</div>
                <p className="mb-0">
                  <strong>SONGHAI</strong>
                </p>
              </div>
              <div className="strategy-basics-tabs-menu-item-text text-small text-white-opacity">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </div>
            </button>
            <button
              data-w-tab="Atlantians"
              className={`strategy-basics-tabs-menu-item w-inline-block w-tab-link ${
                image === "atlantians" && "w--current"
              }`}
              tabIndex={-1}
              id="w-tabs-1-data-w-tab-3"
              role="tab"
              aria-controls="w-tabs-1-data-w-pane-3"
              aria-selected="false"
              onClick={() => setImage("atlantians")}
            >
              <div className="strategy-basics-tabs-menu-item-header">
                <div className="strategy-basics-tabs-menu-item-number">04</div>
                <p className="mb-0">
                  <strong>ATLANTIANS</strong>
                </p>
              </div>
              <div className="strategy-basics-tabs-menu-item-text text-small text-white-opacity">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </div>
            </button>
            <button
              data-w-tab="Nubians"
              className={`strategy-basics-tabs-menu-item w-inline-block w-tab-link ${
                image === "nubians" && "w--current"
              }`}
              tabIndex={-1}
              id="w-tabs-1-data-w-tab-4"
              role="tab"
              aria-controls="w-tabs-1-data-w-pane-4"
              aria-selected="false"
              onClick={() => setImage("nubians")}
            >
              <div className="strategy-basics-tabs-menu-item-header">
                <div className="strategy-basics-tabs-menu-item-number">05</div>
                <p className="mb-0">
                  <strong>NUBIANS</strong>
                </p>
              </div>
              <div className="strategy-basics-tabs-menu-item-text text-small text-white-opacity">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </div>
            </button>
            <button
              data-w-tab="Celts"
              className={`strategy-basics-tabs-menu-item w-inline-block w-tab-link ${
                image === "celt" && "w--current"
              }`}
              tabIndex={-1}
              id="w-tabs-1-data-w-tab-5"
              role="tab"
              aria-controls="w-tabs-1-data-w-pane-5"
              aria-selected="false"
              onClick={() => setImage("celt")}
            >
              <div className="strategy-basics-tabs-menu-item-header">
                <div className="strategy-basics-tabs-menu-item-number">06</div>
                <p className="mb-0">
                  <strong>CELTS</strong>
                </p>
              </div>
              <div className="strategy-basics-tabs-menu-item-text text-small text-white-opacity">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </div>
            </button>
            <button
              data-w-tab="Egyptians"
              className={`strategy-basics-tabs-menu-item w-inline-block w-tab-link ${
                image === "egyptians" && "w--current"
              }`}
              tabIndex={-1}
              id="w-tabs-1-data-w-tab-6"
              role="tab"
              aria-controls="w-tabs-1-data-w-pane-6"
              aria-selected="false"
              onClick={() => setImage("egyptians")}
            >
              <div className="strategy-basics-tabs-menu-item-header">
                <div className="strategy-basics-tabs-menu-item-number">07</div>
                <p className="mb-0">
                  <strong>EGYPTIANS</strong>
                </p>
              </div>
              <div className="strategy-basics-tabs-menu-item-text text-small text-white-opacity">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </div>
            </button>
            <button
              data-w-tab="Europeans"
              className={`strategy-basics-tabs-menu-item w-inline-block w-tab-link ${
                image === "euro" && "w--current"
              }`}
              tabIndex={-1}
              id="w-tabs-1-data-w-tab-7"
              role="tab"
              aria-controls="w-tabs-1-data-w-pane-7"
              aria-selected="false"
              onClick={() => setImage("euro")}
            >
              <div className="strategy-basics-tabs-menu-item-header">
                <div className="strategy-basics-tabs-menu-item-number">08</div>
                <p className="mb-0">
                  <strong>EUROPEANS</strong>
                </p>
              </div>
              <div className="strategy-basics-tabs-menu-item-text text-small text-white-opacity">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </div>
            </button>
            <button
              data-w-tab="Mongols"
              className={`strategy-basics-tabs-menu-item w-inline-block w-tab-link ${
                image === "mongals" && "w--current"
              }`}
              tabIndex={-1}
              id="w-tabs-1-data-w-tab-8"
              role="tab"
              aria-controls="w-tabs-1-data-w-pane-8"
              aria-selected="false"
              onClick={() => setImage("mongals")}
            >
              <div className="strategy-basics-tabs-menu-item-header">
                <div className="strategy-basics-tabs-menu-item-number">09</div>
                <p className="mb-0">
                  <strong>MONGOLS</strong>
                </p>
              </div>
              <div className="strategy-basics-tabs-menu-item-text text-small text-white-opacity">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </div>
            </button>
          </div>
          <div className="strategy-basics-tabs-content w-tab-content">
            <div
              data-w-tab="Genesis"
              className={`genesis _1 w-tab-pane ${
                image === "genesis" && "w--tab-active"
              } `}
              id="w-tabs-1-data-w-pane-0"
              role="tabpanel"
              aria-labelledby="w-tabs-1-data-w-tab-0"
            >
              <div className="corner-dark bottom-right"></div>
            </div>
            <div
              data-w-tab="Agarthians"
              className={`agarthians _2 w-tab-pane ${
                image === "agarthians" && "w--tab-active"
              } `}
              id="w-tabs-1-data-w-pane-1"
              role="tabpanel"
              aria-labelledby="w-tabs-1-data-w-tab-1"
            >
              <div className="corner-dark bottom-right"></div>
            </div>
            <div
              data-w-tab="Songhai"
              className={`songhai _3 w-tab-pane ${
                image === "songhai" && "w--tab-active"
              } `}
              id="w-tabs-1-data-w-pane-2"
              role="tabpanel"
              aria-labelledby="w-tabs-1-data-w-tab-2"
            >
              <div className="corner-dark bottom-right"></div>
            </div>
            <div
              data-w-tab="Atlantians"
              className={`atlantians _4 w-tab-pane ${
                image === "atlantians" && "w--tab-active"
              } `}
              id="w-tabs-1-data-w-pane-3"
              role="tabpanel"
              aria-labelledby="w-tabs-1-data-w-tab-3"
            >
              <div className="corner-dark bottom-right"></div>
            </div>
            <div
              data-w-tab="Nubians"
              className={`nubians w-tab-pane ${
                image === "nubians" && "w--tab-active"
              } `}
              id="w-tabs-1-data-w-pane-4"
              role="tabpanel"
              aria-labelledby="w-tabs-1-data-w-tab-4"
            >
              <div className="corner-dark bottom-right"></div>
            </div>
            <div
              data-w-tab="Celts"
              className={`celt _5 w-tab-pane ${
                image === "celt" && "w--tab-active"
              } `}
              id="w-tabs-1-data-w-pane-5"
              role="tabpanel"
              aria-labelledby="w-tabs-1-data-w-tab-5"
            >
              <div className="corner-dark bottom-right"></div>
            </div>
            <div
              data-w-tab="Egyptians"
              className={`egyptians _5 w-tab-pane ${
                image === "egyptians" && "w--tab-active"
              } `}
              id="w-tabs-1-data-w-pane-6"
              role="tabpanel"
              aria-labelledby="w-tabs-1-data-w-tab-6"
            >
              <div className="corner-dark bottom-right"></div>
            </div>
            <div
              data-w-tab="Europeans"
              className={`euro _5 w-tab-pane ${
                image === "euro" && "w--tab-active"
              } `}
              id="w-tabs-1-data-w-pane-7"
              role="tabpanel"
              aria-labelledby="w-tabs-1-data-w-tab-7"
            >
              <div className="corner-dark bottom-right"></div>
            </div>
            <div
              data-w-tab="Mongols"
              className={`mongals _5 w-tab-pane ${
                image === "mongals" && "w--tab-active"
              } `}
              id="w-tabs-1-data-w-pane-8"
              role="tabpanel"
              aria-labelledby="w-tabs-1-data-w-tab-8"
            >
              <div className="corner-dark bottom-right"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
