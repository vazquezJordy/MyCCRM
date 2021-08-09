import React, { Component } from "react";
import axios from "axios";

export default class PaymentDetailsModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timeStamp: "",
      paymentAmount: "",
      dateDue: "",
      currentID : this.props.currentID
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
    console.log(event.target.value);
    console.log(this.state.currentID)
  }

  handleSubmit(event) {
    axios({
      mode: "no-cors",
      method: "post",
      url: `http://localhost:5000/debtor/${currentID}/payment`,
      data: {
        paymentAmount:this.state.paymentAmount, 
        dateDue: this.state.dateDue,
      }
    })
    .then((response) => {
        console.log(response)
    })
    .catch((error) => {
        console.log(error)
    })
    event.preventDefault();
    
  }

  render() {
    return (
      <div className="payment-detail" >
          <form onSubmit={this.handleSubmit}>
        <label className="payment-detail__payment">
          <div className="payment-detail__payment-header">Payment Amount</div>
          <input
            className="inputField"
            type="number"
            name="paymentAmount"
            value={this.state.paymentAmount}
            onChange={this.handleChange}
          />
        </label>

        <label className="payment-detail__payment">
          <div className="payment-detail__payment-header">Payment Date</div>
          <input
            className="inputField"
            type="number"
            name="dateDue"
            value={this.state.dateDue}
            onChange={this.handleChange}
          />
        </label>

        <button className='btn'>Submit</button>
        </form>
      </div>
    );
  }
}
