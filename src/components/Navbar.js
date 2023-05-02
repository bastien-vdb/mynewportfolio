import React, { useEffect, useState } from "react";
import Link from "next/link";
import ReorderIcon from "@material-ui/icons/Reorder";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <ReorderIcon />
        </button>
      </div>
      <div className="links">
        <Link className="hover:text-3xl hover:border-1 shadow hover:bg-[#141e38] hover:rounded-xl hover:border-yellow-200  duration-100 p-4" href="/"> Home </Link>
        <Link className="hover:text-3xl hover:border-1 shadow hover:bg-[#141e38] hover:rounded-xl hover:border-yellow-200  duration-100 p-4" href="/projects"> Projects </Link>
        <Link className="hover:text-3xl hover:border-1 shadow hover:bg-[#141e38] hover:rounded-xl hover:border-yellow-200  duration-100 p-4" href="/experience"> Experience </Link>
      </div>
    </div>
  );
}

export default Navbar;
