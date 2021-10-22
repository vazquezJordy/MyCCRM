import React, { Component } from "react";
import { NavLink, useHistory } from "react-router-dom";
import ReactModal from "react-modal";
import AddDebtorModal from "../debtor/add-deptor-modal";
import Cookies from "js-cookie";

export default class NavigationContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false
    }

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
    // this.handleSignOut = this.handleSignOut.bind(this);
  }

   handleOpenModal = ()=> {
    this.setState({showModal: true})
  }

  handleModalClose=()=> {
    this.setState({showModal: false});
  } 

  handleSignOut=()=>{
    // let history = useHistory();
    // history.push("/auth")
    this.props.history.push("/auth")
    // Cookies.remove("token")
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

        <div className="right-side">
        <div className="nav-add-user">
          <button onClick={(() => this.handleOpenModal())}>Add Deptor</button>
          <AddDebtorModal 
            modalIsOpen={this.state.showModal}
            handleModalClose={this.handleModalClose}
          />
        </div>
          <button className="user-button">Jordy Vazquez</button>

          <button onClick={this.handleSignOut.bind(this)} className="user-button">Signout</button>
        </div>
      </div>
       
    );
  }
}
