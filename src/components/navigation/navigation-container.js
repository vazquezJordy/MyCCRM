import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import ReactModal from "react-modal";
import AddUserForm from "../add-debtor";

export default class NavigationContainer extends Component {
  constructor(props) {
    super(props);

    this.customStyles = {
      content: {
        top: "50%",
        left: "50%",
        right: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%",
        width: "800px",
      },
      overlay: {
        backgroundColor: "rgba(1, 1, 1, 0.75)",
      },
    };
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
          <button>Add Deptor</button>
          <ReactModal>{AddUserForm}</ReactModal>
        </div>

        <div className="right-side">
          <button className="user-button">Jordy Vazquez</button>
        </div>
      </div>
    );
  }
}
