import { ShoppingBag } from "lucide-react";
import React from "react";

interface LogoProps {
  styles?: string;
}
const Logo = ({ styles }: LogoProps) => {
  return (
    <div className={`items-center flex gap-3 ${styles}`}>
      <ShoppingBag className="text-dark100_light800 w-6 h-6" />
      <h1 className="text-4xl font-bold text-dark100_light800 font-spaceGrotesk">
        ShopCo
      </h1>
    </div>
  );
};

export default Logo;
