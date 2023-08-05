import React from "react";
import Navbar from "../navbar";

type AppRouterProps = {
  children: React.ReactNode;
};
const AppRouter = (props: AppRouterProps) => {
  const { children } = props;
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default AppRouter;
