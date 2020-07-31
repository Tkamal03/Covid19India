import React from "react";

import axios from "axios";

import SvgRounded from "../components/shared/svg-rounded";
import StateTable from "./shared/statetable";

import AutoSearch from "../components/shared/autoSearch";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      width: 0,
      height: 0,
      error: null,
      isLoaded: false,
      stateStats: [],
      districtData: [],
      searchValue: "",
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);

    axios
      .all([
        // axios.get("https://api.covid19india.org/state_district_wise.json"),
        axios.get("https://api.covid19india.org/data.json"),
      ])
      .then(
        axios.spread(stateData => {
          console.log(stateData.data);
          // let distList = [];
          // Object.keys(distData.data).forEach(function (key) {
          //   distList.push({
          //     stateName: key,
          //     distData: distData.data[key],
          //   });
          // });
          // distList.splice(0, 1);

          let stateList = [];
          stateData.data["statewise"].map((item, index) => {
            // console.log(index);
            stateList.push({
              id: index,
              stateName: item.state,
              stateCode: item.statecode,
              active: item.active,
              confirmed: item.confirmed,
              recovered: item.recovered,
              deceased: item.deaths,
              lastupdatedtime: item.lastupdatedtime,
            });
            return stateList;
          });
          stateList.splice(0, 1);
          this.setState({
            // districtData: distList,
            stateStats: stateList,
          });
          console.log("State Stats =>", stateList);
          // console.log("DistrictList =>", distList);
        })
      );
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    return (
      <React.Fragment>
        <div className="relative page-header">
          <SvgRounded />
          <div className="container">
            <div className="row justify-content-sm-center">
              <div className="col-sm-6 col-md-4">
                <h4
                  className="search-header text-center fadeInUp"
                  style={{ animationDelay: "400ms" }}
                >
                  {/* Search your state or district */}
                  Search your state
                </h4>
                <div className="searchBox">
                  <AutoSearch autoSuggestion={this.state.stateStats} />
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    className="bi bi-search"
                    fill=""
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <StateTable tblData={this.state.stateStats} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Home;
