import React from "react";

import SvgRounded from "../components/shared/svg-rounded";
import DistrictTable from "../components/shared/districttable";
import axios from "axios";

class State extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      districtData: [],
    };
  }
  componentDidMount() {
    //GetDistrictData
    axios
      .get("https://api.covid19india.org/state_district_wise.json")
      .then((res) => {
        let distList = [], distList1 = [], distList2 = [], distList3 = [];

        Object.keys(res.data).map((key) => {
          let currentState = this.props.match.params.stateCode;
          if (currentState === res.data[key].statecode) {

            distList.push({
              districtData: res.data[key].districtData,
            });
            return distList;
          }

        });


        Object.keys(distList).map((key) => {
          distList1.push({
            distData: distList[key].districtData,
          });
          return distList1;

        });

        Object.keys(distList1).map((key) => {
          distList2.push({
            distData: distList1[key].distData,
          });
          return distList2;

        });

        Object.keys(distList2[0].distData).map((item) => {
          distList3.push({
            stateName: item,
            distData: distList2[0].distData[item],
          });
        });


        let disListdatajson = [];
        Object.keys(distList3).map((item) => {

          disListdatajson.push({
            id: item,
            stateName: distList3[item].stateName,
            stateCode: distList3[item].stateName,
            active: distList3[item].distData.active,
            confirmed: distList3[item].distData.confirmed,
            recovered: distList3[item].distData.recovered,
            deceased: distList3[item].distData.deceased,
          });
          return disListdatajson;
        });

        this.setState({
          districtData: disListdatajson,
        });


        //distList.splice(0, 1);
        //console.log(distList);

      });
  }
  render() {
    const { location } = this.props;
    return (
      <React.Fragment>
        <div className="relative page-header">
          <SvgRounded />
          <div className="container">
            <div className="row justify-content-sm-center">
              <div className="col-sm-12 text-center">
                <h5>
                  {location.state.detail.stateName} -
                  <span>{this.props.match.params.stateCode}</span>
                </h5>
                <span>
                  Last Updated on {location.state.detail.lastupdatedtime}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div
                className="card card-confirmed confirmedBdr fadeInUp"
                style={{ animationDelay: "250ms" }}
              >
                <div className="card-body">
                  <h5 className="card-title">Confirmed</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      className="bi bi-heart"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"
                      />
                    </svg>
                  </h6>
                  <p className="card-count">
                    {location.state.detail.confirmed}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div
                className="card card-active activeBdr fadeInUp"
                style={{ animationDelay: "350ms" }}
              >
                <div className="card-body">
                  <h5 className="card-title">Active</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      className="bi bi-heart"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"
                      />
                    </svg>
                  </h6>
                  <p className="card-count">{location.state.detail.active}</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div
                className="card card-recovered recoveredBdr fadeInUp"
                style={{ animationDelay: "450ms" }}
              >
                <div className="card-body">
                  <h5 className="card-title">Recovered</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      className="bi bi-heart"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"
                      />
                    </svg>
                  </h6>
                  <p className="card-count">
                    {location.state.detail.recovered}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div
                className="card card-deceased deceasedBdr fadeInUp"
                style={{ animationDelay: "550ms" }}
              >
                <div className="card-body">
                  <h5 className="card-title">Deceased</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      className="bi bi-heart"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"
                      />
                    </svg>
                  </h6>
                  <p className="card-count">{location.state.detail.deceased}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-12">
              <h4 className="mt-5 mb-4">
                {location.state.detail.stateName}'s District List
              </h4>
              <DistrictTable tblData={this.state.districtData} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default State;
