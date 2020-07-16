import React from "react";

import Table from "./table";
import SvgRounded from "./svg-rounded";
import Autosearch from "./autosearch";

class Home extends React.Component {
  render() {
    const searchTxt = {
      fontSize: "1.3rem",
      marginBottom: 20,
      fontWeight: 400,
    };
    return (
      <React.Fragment>
        <div className="relative page-header">
          <SvgRounded />
          <div className="container">
            <div className="row justify-content-sm-center">
              <div className="col-sm-6 col-md-4">
                <h4 style={searchTxt} className="text-center">
                  Search your state or district
                </h4>
                <Autosearch className="" />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Table />
            </div>
            {/* <div className="col-md-4">
              <div id="map"></div>
            </div> */}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Home;
