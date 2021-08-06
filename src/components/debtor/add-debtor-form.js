import React, { Component } from "react";
import axios from "axios";

export default class AddDebtorForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      address1: "",
      address2: "",
      phoneNumber: "",
      employer: "",
      employerPhoneNumber: "",
      ssn: "",
      spouse: "",
      spousePhoneNumber: "",
      spouseEmployer: "",
      spouseEmployerPhoneNumber: "",
      amountOwed: "",
      interest: "",
      eligibleForReporting: Boolean,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }

  handleSubmit(event) {
    axios({
      mode: "no-cors",
      method: "post",
      url: "http://localhost:5000/addDebtor",
      data: {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        address1: this.state.address1,
        address2: this.state.address2,
        phoneNumber: this.state.phoneNumber,
        employer: this.state.employer,
        employerPhoneNumber: this.state.employerPhoneNumber,
        ssn: this.state.ssn,
        spouse: this.state.spouse,
        spousePhoneNumber: this.state.spousePhoneNumber,
        spouseEmployer: this.state.spouseEmployer,
        spouseEmployerPhoneNumber: this.state.spouseEmployerPhoneNumber,
        amountOwed: this.state.amountOwed,
        interest: this.state.interest,
        eligibleForReporting: this.state.eligibleForReporting,
      },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
    console.log(event.target.value);
  }
  handleModalClose() {
    this.props.submitHandleModalClose();
  }

  render() {
    return (
      <div className="add-debtor">
        <div className="add-debtor__header">Add debtor</div>
        <form onSubmit={this.handleSubmit} className="add-debtor__form" >
          <div className="add-debtor__form-left-wrapper">
            <label className="labels">
              FirstName:
              <input
                className="inputField"
                type="text"
                name="firstName"
                value={this.state.firstName}
                onChange={this.handleChange}
              />
            </label>
            <label className="labels">
              LastName:
              <input
                className="inputField"
                type="text"
                name="lastName"
                value={this.state.lastName}
                onChange={this.handleChange}
              />
            </label>
            <label className="labels">
              Address 1:
              <input
                className="inputField"
                type="text"
                name="address1"
                value={this.state.address1}
                onChange={this.handleChange}
              />
            </label>
            <label className="labels">
              Address 2:
              <input
                className="inputField"
                type="text"
                name="address2"
                value={this.state.address2}
                onChange={this.handleChange}
              />
            </label>
            <label className="labels">
              Phone Number:
              <input
                className="inputField"
                type="text"
                name="phoneNumber"
                value={this.state.phoneNumber}
                onChange={this.handleChange}
              />
            </label>
            <label className="labels">
              Employer:
              <input
                className="inputField"
                type="text"
                name="employer"
                value={this.state.employer}
                onChange={this.handleChange}
              />
            </label>
            <label className="labels">
              Employer Phone Number:
              <input
                className="inputField"
                type="text"
                name="employerPhoneNumber"
                value={this.state.employerPhoneNumber}
                onChange={this.handleChange}
              />
            </label>
            <label className="labels">
              SSN:
              <input
                className="inputField"
                type="text"
                name="ssn"
                placeholder="xxx-xx-0000"
                value={this.state.ssn}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div className="add-debtor__form-right-wrapper">
            <label className="labels">
              Spouse:
              <input
                className="inputField"
                type="text"
                name="spouse"
                value={this.state.spouse}
                onChange={this.handleChange}
              />
            </label>
            <label className="labels">
              Spouse Phone Number:
              <input
                className="inputField"
                type="text"
                name="spousePhoneNumber"
                value={this.state.spousePhoneNumber}
                onChange={this.handleChange}
              />
            </label>
            <label className="labels">
              Spouse Employer:
              <input
                className="inputField"
                type="text"
                name="spouseEmployer"
                value={this.state.spouseEmployer}
                onChange={this.handleChange}
              />
            </label>

            <label className="labels">
              Spouse Employer Number:
              <input
                className="inputField"
                type="text"
                name="spouseEmployerPhoneNumber"
                value={this.state.spouseEmployerPhoneNumber}
                onChange={this.handleChange}
              />
            </label>
            <label className="labels">
              Amount owed:
              <input
                className="inputField"
                type="number"
                name="amountOwed"
                value={this.state.amountOwed}
                onChange={this.handleChange}
              />
            </label>
            <label className="labels">
              Interest:
              <input
                className="inputField"
                type="number"
                name="interest"
                value={this.state.interest}
                onChange={this.handleChange}
              />
            </label>
            {/* <label className="labels" for="reported">
              Eligible for credit reporting:
            </label>
            <select
              id="reported"
              name="eligibleForReporting"
              value={this.state.eligibleForReporting}
              onChange={this.handleChange}
            >
              <option value="Null">None</option>
              <option value={true}>Yes</option>
              <option value={false}>No</option>
            </select> */}
              <button className='btn'>Submit</button>
          </div>
        </form>
      </div>
    );
  }
}
