import React, { useEffect, useState } from "react";
import Link from "next/link";
import ReorderIcon from "@material-ui/icons/Reorder";
import Image from "next/image";
import profilePicture from "/src/assets/profile.jpg";
import { useRouter } from "next/navigation";
import Buttons from "./Buttons";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const router = useRouter();

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div data-aos="zoom-in" className="toggleButton">
        <Image onClick={() => router.push("/")} className="shadow-yellow-100 rounded-full w-8" src={profilePicture} alt="Profile Picture" width={100} height={100} />
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <ReorderIcon />
        </button>
      </div>
      <div className="flex flex-col justify-center items-center sm:flex-row sm:justify-start sm:items-start px-6">
        <Link data-aos="fade-up" className="hidden sm:block" href={"/"}>
          <Image className="shadow-yellow-100 rounded-full w-14" src={profilePicture} alt="Profile Picture" width={200} height={200} />
        </Link>
        <div className="links">
          <Link onClick={() => setExpandNavbar(() => false)} href="/">
            <Buttons>
              <span data-aos="zoom-in">Home</span>
            </Buttons>
          </Link>
          <Link onClick={() => setExpandNavbar(() => false)} href="/projects">
            <Buttons>
              <span data-aos="zoom-in">Projects</span>
            </Buttons>
          </Link>
          <Link onClick={() => setExpandNavbar(() => false)} href="/experience">
            <Buttons>
              <span data-aos="zoom-in">Experience</span>
            </Buttons>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
