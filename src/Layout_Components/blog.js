import React from "react";
import SvgRounded from "./svg-rounded";

const messages = () => {
  return (
    <div className="relative page-header">
      <SvgRounded />
      <div className="container">
        <div className="row text-center">
          <div className="col-12">Welcome to Blog Page</div>
        </div>
      </div>
    </div>
  );
};

export default messages;
