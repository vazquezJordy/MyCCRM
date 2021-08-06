import React, { Component } from "react";
import ReactModal from "react-modal";
import PaymentDetailsModal from "./payment-details-Modal";

ReactModal.setAppElement(".app-wrapper");

export default class AddPaymentModal extends Component {
  constructor(props) {
    super(props);

    this.customStyles = {
      content: {
        top: "50%",
        left: "50%",
        right: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%",
        width: "300px",
        height: "200px",
        backgroundColor: "White",
      },
      overlay: {
        backgroundColor: "rgba(1, 2, 3, 0.75)",
      },
    };
  }

  render() {
    return (
      <div>
        <ReactModal
          style={this.customStyles}
          onRequestClose={() => {
            this.props.handleModalClose();
          }}
          isOpen={this.props.modalIsOpen}
        >
          <PaymentDetailsModal />
          <div className="modal-btns">
            <button onClick={this.props.handleModalClose}>Close</button>
          </div>
        </ReactModal>
      </div>
    );
  }
}
