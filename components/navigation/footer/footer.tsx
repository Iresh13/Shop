import React from "react";
import { FooterLinks } from "./constants/footer-list";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="footer-gradient text-white dark:text-primary-100 flex flex-col">
      <div className="flex gap-10 p-10 flex-col lg:flex-row">
        {FooterLinks.sections.map((section) => (
          <div className="flex flex-col gap-5" key={section.title}>
            <h1 className="text-xl font-bold text-white dark:text-primary">
              {section.title}
            </h1>
            {section.links.map((link) => (
              <li className="flex flex-col gap-3" key={link.url}>
                {link.name}
              </li>
            ))}
          </div>
        ))}

        <section className="flex gap-5">
          <Input
            placeholder="Search..."
            className="no-focus shadow-none text-lg placeholder"
          />

          <Button className="px-4 py-3 bg-white text-lg rounded-lg">
            Shop Now
          </Button>
        </section>
      </div>

      <div className="items-center justify-center flex flex-row gap-5 bg-white p-5">
        <Image alt="image-logo" src="/icon.png" height={50} width={50} />
        <h1 className="text-3xl font-bold text-primary dark:text-white">
          ShopCo
        </h1>
      </div>
    </div>
  );
};

export default Footer;
