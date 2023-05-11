import React from "react";
function Buttons({ children }) {
  return (
    <div className="menuButton">
      {children}
      <span className="first"></span>
      <span className="second"></span>
      <span className="third"></span>
      <span className="fourth"></span>
    </div>
  );
}

export default Buttons;
