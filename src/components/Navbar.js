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
        <Image className="shadow-yellow-100 rounded-full w-14" src={profilePicture} alt="Profile Picture" width={100} height={100} />
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <ReorderIcon />
        </button>
      </div>
      <div className="flex flex-col justify-center items-center sm:flex-row sm:justify-start sm:items-start px-6">
        <Link className="hidden sm:block" href={"/"}>
          <Image className="shadow-yellow-100 rounded-full w-14" src={profilePicture} alt="Profile Picture" width={200} height={200} />
        </Link>
        <div className="links">
          <Link className="hover:text-2xl hover:border-1 shadow hover:bg-[#f1c40f] duration-300 hover:text-[#2980b9] hover:rounded-xl hover:border-yellow-200  duration-100 p-3" href="/">
            Home
          </Link>
          <Link className="hover:text-2xl hover:border-1 shadow hover:bg-[#f1c40f] duration-300 hover:text-[#2980b9] hover:rounded-xl hover:border-yellow-200  duration-100 p-3" href="/projects">
            Projects
          </Link>
          <Link className="hover:text-2xl hover:border-1 shadow hover:bg-[#f1c40f] duration-300 hover:text-[#2980b9] hover:rounded-xl hover:border-yellow-200  duration-100 p-3" href="/experience">
            Experience
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
