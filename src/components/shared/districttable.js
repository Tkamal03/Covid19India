import React from "react";
import ReactDatatable from "@ashvin27/react-datatable";

//import history from "history";

class DistrictTable extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [
      {
        key: "stateName",
        text: "District",
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
        text: "Deceaseed",
        sortable: true,
        className: "deceased",
        TrOnlyClassName: "deceasedTr",
      },
      // {
      //   text: "Action",
      //   className: "action",
      //   cell: (record, index) => {
      //     return (
      //       <React.Fragment>
      //         <button className="btn btn-outline-secondary btn-sm">View</button>
      //       </React.Fragment>
      //     );
      //   },
      // },
    ];
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

  render() {
    return (
      <ReactDatatable
        className="table table-bordered tbl"
        config={this.config}
        records={this.props.tblData}
        columns={this.columns}
      />
    );
  }
}

export default DistrictTable;
