import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarNav,
  NavbarToggler,
  Collapse,
  NavItem,
  NavLink
} from "mdbreact";

export default class Heading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }
  render() {
    return (
      <div>
        <Navbar color="indigo" fixed="top" dark expand="md">
          <NavbarBrand href="/home">
            <strong>ReactPay</strong>
          </NavbarBrand>
          {!this.state.isWideEnough && <NavbarToggler onClick={this.onClick} />}
          <Collapse isOpen={this.state.collapse} navbar>
            <NavbarNav right>
              <NavItem>
                <NavLink to="/pay/">Pay</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/bill/">Bill</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/report/">Report</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/config/">Config</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/">Logout</NavLink>
              </NavItem>
            </NavbarNav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
