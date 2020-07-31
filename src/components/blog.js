import React from "react";

import SvgRounded from "../components/shared/svg-rounded";

class Blog extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="relative page-header">
          <SvgRounded />
          <div className="container">
            <div className="row justify-content-sm-center">
              <div className="col-sm-12 text-center">
                <h5>Blog Page</h5>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Blog;
