import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NavLinks, NavLinkType } from "@/constants/nav-links";
import { Menu } from "lucide-react";
import Link from "next/link";

const SideBar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu />
      </SheetTrigger>
      <SheetContent side="left" className="border-none bg-dark100_light800">
        <SheetHeader>
          <SheetTitle className="hidden">ShopCo</SheetTitle>
          <SheetDescription>
            <div className="flex flex-col gap-4">
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
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default SideBar;
