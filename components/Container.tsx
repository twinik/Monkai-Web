import React from "react";

const Container: React.FC<{ className?: string }> = ({
  children,
  className,
}) => {
  const baseClass =
    "mx-auto max-w-8 xl text-center w-full px-4 lg:px-8 flex flex-col items-start justify-center text-black";

  const appendedClassName = `${baseClass} ${className}`;

  return <div className={appendedClassName}>{children}</div>;
};

export default Container;
