import React, { Component } from "react";
import Heading from "../../components/Nav/Nav";
import PayForm from "../../components/payForm";
import FooterPage from "../../components/footer";
import API from "../../utils/API";
// import { ReactstrapInput } from "reactstrap-formik";


class Pay extends Component {
    
  //API request object could be stored in state
  state = { 
      firstName: '',
      lastName: '',
      cardNum: '',
      year: ''
    };

  //   handleInputChange = event => {
  //   const name = event.target.name;
  //   const value = event.target.value;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    const { firstName, lastName, cardNum, year } = event.target;
    this.setState({
      [name]: value
    });
  };
  
  handleFormSubmit = event => {
    event.preventDefault();
    console.log("inside handle form")
    // if (this.state.cardNum && this.state.expiry) { //form validation
         // need to create a field for amount
      // })
      API.testConnect()
      .then(result => {
          console.log("OK");
          // return resp = result.data;
          console.log(result);
      })
      .catch(error => {
          console.log(error);
          throw error;
    })
  };

  render() {
    return (
      <React.Fragment>
        <Heading />
        <br />
        <div class="container">
          <PayForm onSubmit={this.handleFormSubmit}/>
        </div>
        <div>
          <FooterPage />
        </div>
      </React.Fragment>
    );
  }
}

export default Pay;
