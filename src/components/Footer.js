import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import Link from "next/link";

function Footer() {
  return (
    <div className="footer">
      <div data-aos="zoom-in" className="socialMedia flex items-center justify-center">
        <Link href="https://fr.linkedin.com/in/bastien-vermot-de-boisrolin-10051a72" passHref={true} target="_blank" rel="noopener noreferrer" className="hover:scale-110 duration-300">
          <LinkedInIcon />
        </Link>

        <Link href="https://github.com/bastien-vdb/" passHref={true} target="_blank" rel="noopener noreferrer" className="hover:scale-110 duration-300">
          <GitHubIcon />
        </Link>
      </div>
      <Link href="/">
        <p> &copy; 2023 Bastiendeboisrolin.info</p>
      </Link>
    </div>
  );
}

export default Footer;
