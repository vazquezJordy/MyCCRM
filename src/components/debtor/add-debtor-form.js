import React, { Component } from "react";

export default class AddDebtorForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      address1: "",
      address2: "",
      phoneNumber: "",
      ssn: "",
      spouse: "",
      spousePhoneNumber: "",
      spouseEmployer: "",
      employer: "",
      employerNumber: "",
      amountOwed: "",
      interest: "",
      eligibleForCreditReporting: Boolean,
    };
  }

  render() {
    return (
      <div className="add-deptor">
        <div className="add-deptor-header">Add debtor</div>
        <form className="add-debtor__form">
          <div className="debtor-form__left-wrapper">
            <label className="labels">
              FirstName:
              <input className="inputField" type="text" name="firstName" />
            </label>
            <label className="labels">
              LastName:
              <input className="inputField" type="text" name="lastName" />
            </label>
            <label className="labels">
              Address 1:
              <input className="inputField" type="text" name="address1" />
            </label>
            <label className="labels">
              Address 2:
              <input className="inputField" type="text" name="address2" />
            </label>
            <label className="labels">
              Phone Number:
              <input className="inputField" type="text" name="phoneNumber" />
            </label>
            <label className="labels">
              SSN:
              <input
                className="inputField"
                type="text"
                name="SSN"
                placeholder="xxx-xx-0000"
              />
            </label>
          </div>
          <div className="debtor-form__right-wrapper">
            <label className="labels">
              Spouse:
              <input className="inputField" type="text" name="spouse" />
            </label>
            <label className="labels">
              Spouse Phone Number:
              <input
                className="inputField"
                type="text"
                name="spousePhoneNumber"
              />
            </label>
            <label className="labels">
              Spouse Emplyer:
              <input className="inputField" type="text" name="spouseEmployer" />
            </label>
            <label className="labels">
              Employer:
              <input className="inputField" type="text" name="employer" />
            </label>
            <label className="labels">
              Employer Number:
              <input className="inputField" type="text" name="employerNumber" />
            </label>
            <label className="labels">
              Amount owed:
              <input className="inputField" type="number" name="amountOwed" />
            </label>
            <label className="labels">
              Interest:
              <input
                className="inputField"
                type="number"
                name="employerNumber"
              />
            </label>
            <label className="labels" for="reported">
              Eligible for credit reporting:
            </label>
            <select id="reported" name="cars">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <div className="submit-btn">
              <button>Submit</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
