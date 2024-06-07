import React from "react";

const Header = () => {
  return (
    <h1 className="text-lg hover:cursor-pointer md:text-4xl font-extrabold text-neutral text-center">
      <span
        className="animate-pulse
          duration-3000
        "
      >
        🔮
      </span>
      MoonLetters
    </h1>
  );
};

export default Header;
