import React, { useState } from "react";
import Portfolio from "./Portfolio";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleNotOpen = () => {
    setIsOpen(false);
  };
  return (
    <div onMouseEnter={handleOpen} onMouseLeave={handleNotOpen}>
      <div className="text-2xl mt-8">FrontEnd Developer</div>
      <div>
        {isOpen && (
          <div>
            backdfb
            <br />
            HyoJoong kim
            <br />
            wva22lfr@gmail.com
          </div>
        )}
      </div>
      <Portfolio />
    </div>
  );
};

export default Header;
