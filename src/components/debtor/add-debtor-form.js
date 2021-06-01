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
        }
    }

  render() {
    return (
      <div className="add-deptor">
        <div className="add-deptor__header">Add debtor</div>
        <div className="add-debtor__form">
          <form className="debtor-form-wrapper">
            <label>
              FirstName:
              <input type="text" name="firstName" />
            </label>
            <label>
              LastName:
              <input type="text" name="lastName" />
            </label>
            <label>
              Address 1:
              <input type="text" name="address1" />
            </label>
            <label>
              Address 2:
              <input type="text" name="address2" />
            </label>
            <label>
              Phone Number:
              <input type="text" name="phoneNumber" />
            </label>
            <label>
              SSN:
              <input type="text" name="SSN" placeholder="xxx-xx-0000" />
            </label>
            <label>
              Spouse:
              <input type="text" name="spouse" />
            </label>
            <label>
              Spouse Phone Number:
              <input type="text" name="spousePhoneNumber" />
            </label>
            <label>
              Spouse Emplyer:
              <input type="text" name="spouseEmployer" />
            </label>
            <label>
              Employer:
              <input type="text" name="employer" />
            </label>
            <label>
              Employer Number:
              <input type="text" name="employerNumber" />
            </label>
            <label>
              Amount owed:
              <input type="number" name="amountOwed" />
            </label>
            <label>
              Interest:
              <input type="number" name="employerNumber" />
            </label>
            <label for="reported">Eligible for credit reporting:</label>
            <select id="reported" name="cars">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </form>
          <div className='close-btn'>
              <button>Close</button>
          </div>
        </div>
      </div>
    );
  }
}
