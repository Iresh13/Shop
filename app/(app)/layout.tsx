import React, { ReactNode } from "react";

const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col gap-20 items-center lg:p-20 p-6 mx-auto">
      {children}
    </div>
  );
};

export default AppLayout;
