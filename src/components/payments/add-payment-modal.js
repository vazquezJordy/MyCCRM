import React, { Component } from "react";
import ReactModal from "react-modal";
import axios from "axios";

ReactModal.setAppElement(".app-wrapper");

export default class AddPaymentModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timeStamp: "",
      paymentAmount: "",
      dateDue: "",
      currentID: this.props.debtorID,
    };

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
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
    console.log(event.target.value);
  }

  handleSubmit(event) {
    axios({
      mode: "no-cors",
      method: "post",
      url: `http://localhost:5000/debtor/${this.state.currentID}/payments`,
      data: {
        paymentAmount: this.state.paymentAmount,
        dateDue: this.state.dateDue,
      },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <ReactModal
          style={this.customStyles}
          onRequestClose={() => {
           
          }}
          isOpen={this.props.modalIsOpen}
          currentID={this.props.debtorID}
        >
          <div className="payment-detail">
            <form onSubmit={this.handleSubmit}>
              <label className="payment-detail__payment">
                <div className="payment-detail__payment-header">
                  Payment Amount
                </div>
                <input
                  className="inputField"
                  type="number"
                  name="paymentAmount"
                  value={this.state.paymentAmount}
                  onChange={this.handleChange}
                />
              </label>

              <label className="payment-detail__payment">
                <div className="payment-detail__payment-header">
                  Payment Date
                </div>
                <input
                  className="inputField"
                  type="number"
                  name="dateDue"
                  value={this.state.dateDue}
                  onChange={this.handleChange}
                />
              </label>

              <button type="submit">Submit</button>
            </form>
          </div>
        </ReactModal>
      </div>
    );
  }
}
