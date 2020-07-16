import React from "react";
import ReactDatatable from "@ashvin27/react-datatable";
import history from "./history";

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [
      {
        key: "state",
        text: "State",
        sortable: true,
      },
      {
        key: "confirmed",
        text: "Confirmed",
        sortable: true,
        className: "confirmed",
        TrOnlyClassName: "confirmedTr",
      },
      {
        key: "active",
        text: "Active",
        sortable: true,
        className: "active",
        TrOnlyClassName: "activeTr",
      },
      {
        key: "recovered",
        text: "Recovered",
        sortable: true,
        className: "recovered",
        TrOnlyClassName: "recoveredTr",
      },
      {
        key: "deceased",
        text: "Deceased",
        sortable: true,
        className: "deceased",
        TrOnlyClassName: "deceasedTr",
      },
      {
        text: "Action",
        className: "action",
        cell: (record, index) => {
          return (
            <React.Fragment>
              <button
                className="btn btn-outline-secondary btn-sm"
                onClick={this.viewRecordHandler.bind(this, record, index)}
                style={{ marginRight: "5px" }}
              >
                View
              </button>
            </React.Fragment>
          );
        },
      },
    ];

    this.state = {
      total: [],
      records: [
        {
          id: "1",
          shortCode: "MH",
          state: "Maharashtra",
          confirmed: "2,67,665",
          active: "1,07,665",
          recovered: "1,49,007",
          deceased: "10,695",
        },
        {
          id: "2",
          shortCode: "TN",
          state: "Tamil Nadu",
          confirmed: "1,47,324",
          active: "47,915",
          recovered: "97,310",
          deceased: "2,099",
        },
        {
          id: "3",
          shortCode: "DL",
          state: "Delhi",
          confirmed: "1,15,346",
          active: "18,664",
          recovered: "93,236",
          deceased: "3,446",
        },
        {
          id: "4",
          shortCode: "KA",
          state: "Karnataka",
          confirmed: "44,077",
          active: "25,836",
          recovered: "17,391",
          deceased: "846",
        },
      ],
    };

    this.config = {
      page_size: 10,
      length_menu: [10, 20, 50],
      show_filter: true,
      show_pagination: true,
      pagination: "basic",
      button: {
        excel: false,
        print: false,
      },
    };
  }

  viewRecordHandler = (record, index) => {
    history.push(`/state/${record.shortCode}`);
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    let url = "https://api.covid19india.org/v4/min/data.min.json";
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        // let stateCode = Object.keys(res);
        // console.log(stateCode);
      });
  };

  render() {
    return (
      <ReactDatatable
        className="table table-bordered tbl"
        config={this.config}
        records={this.state.records}
        columns={this.columns}
      />
    );
  }
}

export default Table;
