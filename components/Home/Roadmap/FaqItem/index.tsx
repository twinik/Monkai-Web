import React, { useState } from "react";

export default function FaqItem(item: any) {
  const [open, setOpen] = useState(true);

  return (
    <div data-click="faq" className="c-faq-item" onClick={() => setOpen(!open)}>
      <div className="c-faq-q">
        <div className="c-faq-q-text">
          <div className="faq-q-text">{item.item.question}</div>
        </div>
        <div className="c-faq-icon">
          <div
            className="_w-faq-icon"
            style={{
              transform: `translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) ${
                open ? "rotateZ(0deg)" : "rotateZ(180deg)"
              }  skew(0deg, 0deg)`,
              transformStyle: "preserve-3d",
              transition: "transform 0.5s ease",
            }}
          >
            <div
              className="faq-stripe-1"
              style={{ opacity: `${open ? "1" : "0"} ` }}
            ></div>
            <div className="faq-stripe-2"></div>
          </div>
        </div>
      </div>
      <div
        className="c-faq-a"
        style={{
          maxHeight: `${open ? "0px" : "10000px"} `,
          transition: "max-height 0.5s ease",
        }}
      >
        <div className="c-faq-divider">
          <div className="faq-divider"></div>
        </div>
        <div className="c-faq-a-text">
          <p
            className="faq-a-text"
            style={{
              opacity: `${open ? "0" : "1"} `,
              transition: "opacity 0.5s ease",
            }}
          >
            {item.item.answer}
            <br />
          </p>
        </div>
      </div>
    </div>
  );
}
