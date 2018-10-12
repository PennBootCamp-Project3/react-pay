import React, { Component } from "react";
import Heading from "../../components/Nav/Nav";
import ReportForm from "../../components/reportForm";
import FooterPage from "../../components/footer";

class Report extends Component {
  render() {
    return (
      <React.Fragment>
        <Heading />
        <br />
        <div class="container">
          <ReportForm />
        </div>
        <div>
          <FooterPage />
        </div>
      </React.Fragment>
    );
  }
}

export default Report;
