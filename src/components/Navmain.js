import React from "react";
import NavUp from "./NavbarUp";
import SideNav from "./SideNavbar";
import NavUpSec from "./NavUpSec";

/* This component is contains all the three navbars */

const Navmain = () => {
  return (
    <div>
      <NavUp />
      <SideNav />
      <NavUpSec />
    </div>
  );
};

export default Navmain;
