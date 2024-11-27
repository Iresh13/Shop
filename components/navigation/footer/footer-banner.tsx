import React from "react";
import Logo from "../logo";

const FooterBanner = () => {
  return (
    <div className="items-center justify-between flex flex-row gap-5  p-5 bg-primary-50 dark:bg-black-800">
      <Logo />

      <p className="text-dark-700 dark:text-light-300 italic text-sm">
        All Right Reserved. 2024
      </p>
    </div>
  );
};

export default FooterBanner;
