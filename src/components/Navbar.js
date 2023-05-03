import React, { useEffect, useState } from "react";
import Link from "next/link";
import ReorderIcon from "@material-ui/icons/Reorder";
import Image from "next/image";
import profilePicture from "/src/assets/profile.jpg";

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
      <div className="flex justify-center items-center px-6">
        <Link href={"/"}>
          <Image className="shadow-yellow-100 rounded-full w-14" src={profilePicture} alt="Profile Picture" width={200} height={200} />
        </Link>
        <div className="links">
          <Link className="hover:text-3xl hover:border-1 shadow hover:bg-[#f1c40f] duration-300 hover:text-[#2980b9] hover:rounded-xl hover:border-yellow-200  duration-100 p-4" href="/">
            Home
          </Link>
          <Link className="hover:text-3xl hover:border-1 shadow hover:bg-[#f1c40f] duration-300 hover:text-[#2980b9] hover:rounded-xl hover:border-yellow-200  duration-100 p-4" href="/projects">
            Projects
          </Link>
          <Link className="hover:text-3xl hover:border-1 shadow hover:bg-[#f1c40f] duration-300 hover:text-[#2980b9] hover:rounded-xl hover:border-yellow-200  duration-100 p-4" href="/experience">
            Experience
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
