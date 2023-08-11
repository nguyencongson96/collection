import React, { ReactElement } from "react";

const DefaultLayout = ({ children }: { children: ReactElement }) => {
  return <div>{children}</div>;
};

export default DefaultLayout;
