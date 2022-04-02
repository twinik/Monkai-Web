import { get } from "lodash";
import React from "react";
import styled from "styled-components";

// Icons
import { FiChevronRight } from "react-icons/fi";

// Models
import { AccordionProps, ArrowProps } from "../../models/accordion";

// Styled
const ArrowRight = styled(FiChevronRight)<ArrowProps>((props) => {
  const angle = props.open ? "-90deg" : "90deg";

  return `
  transform: rotateZ(${angle});
  transition: all 200ms ease;
  `;
});

export const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [open, setOpen] = React.useState(false);
  const [height, setHeight] = React.useState<string>("0px");

  const contentElement = React.useRef(null);

  const onCollapse = () => {
    setOpen(!open);
    setHeight(
      !open ? `${get(contentElement, "current.scrollHeight", "")}px` : "0px"
    );
  };

  return (
    <div className="cursor-pointer border-b-2 font-normal mb-2">
      <div
        className="uppercase text-lg lg:text-xl ext-left flex justify-between mb-2"
        onClick={onCollapse}
      >
        {title} <ArrowRight open={open} />
      </div>
      <div
        ref={contentElement}
        style={{ height: height }}
        className="border-t-1  border-slate-900 overflow-hidden transition-all duration-200 text-left"
      >
        {children}
      </div>
    </div>
  );
};
