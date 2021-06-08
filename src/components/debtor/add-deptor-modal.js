import React, { Component } from "react";
import ReactModal from "react-modal";

import AddDebtorForm from "./add-debtor-form";

ReactModal.setAppElement(".app-wrapper");

export default class AddDebtorModal extends Component {
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
        height: "500px"
      },
      overlay: {
        backgroundColor: "rgba(1, 1, 1, 0.75)",
      },
    };
  }

  handleModalClose(){
    this.props.handleModalClose();
  }

  render() {
    return (
      <div>
        <ReactModal
          style={this.customStyles}
          isOpen={this.props.modalIsOpen}
        >
          <AddDebtorForm submitHandleModalClose={this.handleModalClose} />
          <div className="close-btn">
            <button onClick={this.props.handleModalClose}>Close</button>
          </div>
        </ReactModal>
      </div>
    );
  }
}
