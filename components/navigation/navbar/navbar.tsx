import Image from "next/image";
import React from "react";
import Theme from "./theme";
import { Heart, ShoppingCart, User } from "lucide-react";
import SearchBar from "@/components/search-bar/search-bar";
import Link from "next/link";
import { NavLinks, NavLinkType } from "@/constants/nav-links";
import SideBar from "./side-bar";

const Navbar = () => {
  return (
    <div className="p-4 sticky gap-4 dark:bg-primary bg-white w-full flex flex-col border-primary border-b-2">
      <div className="flex items-center gap-20 justify-between">
        <Link className="items-center flex gap-3 mobile-view" href="/">
          <Image alt="image-logo" src="/icon.png" height={50} width={50} />
          <h1 className="text-3xl font-bold text-primary dark:text-white">
            ShopCo
          </h1>
        </Link>

        <div className="desktop-view">
          <SideBar />
        </div>

        <div className="items-center justify-between gap-8 mobile-view">
          {NavLinks.map((link: NavLinkType) => {
            return (
              <Link href={link.link} key={link.title}>
                <h3 className="text-xl font-semibold dark:text-white text-primary">
                  {link.title}
                </h3>
              </Link>
            );
          })}
        </div>

        <div className="mobile-view w-full">
          <SearchBar />
        </div>

        <section className="flex items-center gap-6">
          <Link href="/">
            <Heart />
          </Link>
          <Link href="/">
            <ShoppingCart />
          </Link>
          <Link href="/">
            <User />
          </Link>
          <Theme />
        </section>
      </div>

      <div className="desktop-view">
        <SearchBar />
      </div>
    </div>
  );
};

export default Navbar;
