import React from "react";
import Navbar from "../Navbar";

type FrameProps = {
  children: React.ReactNode;
};
const Frame = (props: FrameProps) => {
  const { children } = props;
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default Frame;
