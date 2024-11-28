import React, { ReactNode } from "react";

const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col gap-20 items-center mx-auto lg:px-20 pb-10">
      {children}
    </div>
  );
};

export default AppLayout;
