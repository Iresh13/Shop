import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const BannerCard = () => {
  return (
    <div className="primary-gradient w-full gap-10 flex items-center relative p-5 lg:p-20">
      <div className="gap-10 flex flex-col items-center justify-center lg:items-start lg:justify-start">
        <p className="font-semibold text-4xl text-dark-800 text-center ">
          New Summer 2024
        </p>
        <h1 className="font-semibold text-6xl line-clamp-6 text-center text-dark-900 leading-32 uppercase">
          Find Clothes That
          <br /> Matches Your Style
        </h1>
        <p className="text-4xl text-dark-800 text-center caveat-text">
          We know how large objects will act, but things on a small scale.
        </p>

        <Button className="button-primary">Shop Now</Button>
      </div>

      <Image
        src="/shopping.png"
        alt="shopping-image"
        height={450}
        width={550}
        className="absolute -right-5 -bottom-4 mobile-view object-cover"
      />
    </div>
  );
};

export default BannerCard;
