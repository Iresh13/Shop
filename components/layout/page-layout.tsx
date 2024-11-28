import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface PageLayoutProps {
  styles?: string;
  children: ReactNode;
}
const PageLayout = ({ children, styles }: PageLayoutProps) => {
  return (
    <div
      className={cn(
        "mx-auto flex w-full min-h-screen flex-col gap-y-6 p-10 pb-24 lg:gap-y-12",
        styles
      )}
    >
      {children}
    </div>
  );
};

export default PageLayout;
