import React, { useState } from "react";
import { Navbar } from "./Navbar";

export const Layout: React.FC = ({ children }) => {
  const [navbar, setNavbar] = useState<boolean>(false);

  return (
    <div>
      <Navbar
        navbar={navbar}
        setNavbar={(navbar: boolean) => setNavbar(navbar)}
      />
      <div className={`${navbar && "hidden"} mt-16 lg:mt-0`}>{children}</div>
    </div>
  );
};
