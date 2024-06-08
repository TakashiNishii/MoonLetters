import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="text-neutral text-center ">
      <p className="text-sm">
        Made with ❤️ by{" "}
        <Link
          href="https://takashinishi.com"
          target="_blank"
          className="font-extrabold link-hover"
        >
          Takashi Nishi
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
