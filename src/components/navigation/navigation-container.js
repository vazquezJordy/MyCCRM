import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import ReactModal from "react-modal";
import AddDebtorModal from "../debtor/add-deptor-modal";

import Cookies from "js-cookie";

class NavigationContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
  }

  handleOpenModal = () => {
    this.setState({ showModal: true });
  };

  handleModalClose = () => {
    this.setState({ showModal: false });
  };

  handleSignOut() {
    this.props.handleSignOut();
  }

  render() {
    const handleLogout = () => {
      const token = Cookies.get("token");

      if (Cookies.get("token") === token) {
        Cookies.remove("token");
        this.handleSignOut();
        this.props.history.push("/");
      }
    };
    if (this.props.loggedInStatus === "LOGGED_IN") {
      return (
        <div className="nav-wrapper">
          <div className="nav-link-wrapper">
            <NavLink to="/" activeClassName="nav-link-active">
              Debtor
            </NavLink>
          </div>

          <button
            className="nav-add-user"
            onClick={() => this.handleOpenModal()}
          >
            Add Deptor
          </button>
          <AddDebtorModal
            modalIsOpen={this.state.showModal}
            handleModalClose={this.handleModalClose}
          />

          <button className="user-button">Jordy Vazquez</button>

          <button onClick={handleLogout} className="user-button">
            Signout
          </button>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default withRouter(NavigationContainer);
