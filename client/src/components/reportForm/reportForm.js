import React, { Component } from "react";
import { Table } from "reactstrap";
import ReactTable from "react-table";
import API from "../../utils/API";

class ReportForm extends Component {
  render() {
    return (
      <div className="container-fluid">
        <h5>
          <strong>Reports</strong>
        </h5>
        <hr />
        <ReactTable
          data={this.props.resp}
          columns={this.props.cols}
          // resolveData={data => data.map(row => row)}
          // data={this.state}
          // columns={}
        />
      </div>
    );
  }
}

export default ReportForm;
