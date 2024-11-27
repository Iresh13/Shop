"use client";

import * as React from "react";
import { Moon, MoonIcon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Theme = () => {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="relative flex ">
          <Sun className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-dark300_light600" />
          <Moon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-dark300_light600" />
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="text-dark800_light100 bg-dark100_light800"
      >
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Theme;
