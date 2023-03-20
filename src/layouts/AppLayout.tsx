import React, { FC, ReactElement } from "react";
import { NavBar } from "../components/layout";

interface IAppLayout {
  children: ReactElement;
}

const AppLayout: FC<IAppLayout> = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
};

export default AppLayout;
