import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import ReactModal from "react-modal";
import AddDebtorModal from "../debtor/add-deptor-modal";

export default class NavigationContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false
    }

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({showModal: true});
  }

  handleCloseModal() {
    this.setState({showModal: false})
  }

  render() {
    return (
      <div className="nav-wrapper">
        <div className="left-side">
          <div className="nav-link-wrapper">
            <NavLink to="/" activeClassName="nav-link-active">
              Dashboard
            </NavLink>
          </div>

          <div className="nav-link-wrapper">
            <NavLink to="/debtor" activeClassName="nav-link-active">
              Debtor
            </NavLink>
          </div>

          <div className="nav-link-wrapper">
            <NavLink to="/payment" activeClassName="nav-link-active">
              Payments
            </NavLink>
          </div>
        </div>

        <div className="nav-add-user">
          <button onClick={this.handleOpenModal}>Add Deptor</button>
          <AddDebtorModal 
          handleOpenModal={this.handleOpenModal}
          />
        </div>

        <div className="right-side">
          <button className="user-button">Jordy Vazquez</button>
        </div>
      </div>
    );
  }
}
