import React from "react";
import Theme from "./theme";
import { Heart, ShoppingBag, ShoppingCart, User } from "lucide-react";
import SearchBar from "@/components/search-bar/search-bar";
import Link from "next/link";
import { NavLinks, NavLinkType } from "@/constants/nav-links";
import SideBar from "./side-bar";
import Logo from "../logo";

const Navbar = () => {
  return (
    <div className="p-4 sticky gap-4 w-full flex flex-col border-none bg-primary-50 dark:bg-black-800">
      <div className="flex items-center gap-20 justify-between">
        <Link href="/" className="mobile-view">
          <Logo />
        </Link>

        <div className="desktop-view">
          <SideBar />
        </div>

        <div className="items-center justify-between gap-8 mobile-view">
          {NavLinks.map((link: NavLinkType) => {
            return (
              <Link href={link.link} key={link.title}>
                <h3 className="text-2xl font-semibold text-dark300_light600">
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
          <Link href="/" className="text-dark300_light600">
            <Heart />
          </Link>
          <Link href="/">
            <ShoppingCart className="text-dark300_light600" />
          </Link>
          <Link href="/">
            <User className="text-dark300_light600" />
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
