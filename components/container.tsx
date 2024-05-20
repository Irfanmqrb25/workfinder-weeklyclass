import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="px-4 md:px-14 xl:px-20 pt-24 lg:pt-28 pb-8">{children}</div>
  );
};

export default Container;
