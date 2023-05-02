import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia flex items-center justify-center">
        <LinkedInIcon />
        <GitHubIcon />
      </div>
      <p> &copy; 2023 Bastiendeboisrolin.info</p>
    </div>
  );
}

export default Footer;
