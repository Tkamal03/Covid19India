import React from "react";
import SvgRounded from "./svg-rounded";

const profile = () => {
  return (
    <div className="relative page-header">
      <SvgRounded />
      <div className="container">
        <div className="row text-center">
          <div className="col-12">Welcome to About Page</div>
        </div>
      </div>
    </div>
  );
};

export default profile;
