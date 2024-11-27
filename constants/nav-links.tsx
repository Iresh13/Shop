import { Home, ShoppingCart } from "lucide-react";
import { Routes } from "./routes";
import { ReactElement } from "react";

export interface NavLinkType {
  title: string;
  link: string;
  icon: ReactElement;
}

export const NavLinks: NavLinkType[] = [
  {
    title: "Home",
    link: Routes.HOME,
    icon: <Home size={28} />,
  },

  {
    title: "Men",
    link: Routes.HOME,
    icon: <Home size={28} />,
  },
  {
    title: "Women",
    link: Routes.HOME,
    icon: <Home size={28} />,
  },
  {
    title: "Kids",
    link: Routes.HOME,
    icon: <Home size={28} />,
  },
  {
    title: "Sports",
    link: Routes.HOME,
    icon: <Home size={28} />,
  },
];
