import React from "react";

import Logo from "../logo";

const FooterBanner = () => {
  return (
    <div className="flex flex-row items-center justify-between gap-5  bg-primary-50 p-5 dark:bg-black-800">
      <Logo />

      <p className="text-sm italic text-dark-700 dark:text-light-300">
        All Right Reserved. 2024
      </p>
    </div>
  );
};

export default FooterBanner;
