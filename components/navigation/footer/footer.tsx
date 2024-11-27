import React from "react";
import { FooterLinks } from "./constants/footer-list";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { Socials } from "./constants/socials";
import { ArrowRight } from "lucide-react";
import Logo from "../logo";
import FooterBanner from "./footer-banner";

const Footer = () => {
  return (
    <div className="text-white dark:text-primary-100 flex flex-col bg-primary-100 dark:bg-black-900">
      <div className="flex p-10 flex-col lg:flex-row gap-10 lg:gap-32">
        {FooterLinks.sections.map((section) => (
          <div className="flex flex-col gap-5" key={section.title}>
            <h2 className="text-xl text-dark300_light600 font-semibold">
              {section.title}
            </h2>
            {section.links.map((link) => (
              <li
                className="flex flex-col gap-3 text-dark400_light500 text-sm"
                key={link.url}
              >
                {link.name}
              </li>
            ))}
          </div>
        ))}

        <div className="flex flex-col gap-5">
          <h1 className="text-xl  text-dark300_light600 font-semibold">
            {Socials.section}
          </h1>
          {Socials.links.map((link) => (
            <li
              className="flex flex-col gap-3 text-dark400_light500 text-sm"
              key={link.url}
            >
              {link.name}
            </li>
          ))}
        </div>

        <section className="flex gap-5 flex-col">
          <p className="text-xl text-dark300_light600 font-semibold">
            Stay in touch
          </p>

          <section className="flex gap-5 flex-col lg:flex-row">
            <Input
              placeholder="Email"
              className="no-focus shadow-none text-lg placeholder border-2 border-dark-600  dark:border-light-300 min-h-12 min-w-full"
            />

            <Button className="px-4 py-3 text-lg rounded-lg bg-dark-700 hover:bg-primary-600 min-h-12">
              Subscribe
              <ArrowRight />
            </Button>
          </section>

          <p className="flex flex-col gap-3 text-dark400_light500 text-sm">
            Sign up for free discount vouchers*
          </p>
        </section>
      </div>

      <FooterBanner />
    </div>
  );
};

export default Footer;
