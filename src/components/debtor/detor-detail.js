import React, { Component } from "react";
import axios from "axios";

import AddPaymentModal from "../payments/add-payment-modal";

export default class DebtorDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentId: this.props.match.params.slug,
      currentDebtor: {},
      firstName: "",
      showModal: false,
    };
    this.getCurrentDebtor = this.getCurrentDebtor.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
  }

  handleOpenModal = ()=> {
    this.setState({showModal: true})
  }

  handleModalClose=()=> {
    this.setState({showModal: false});
  } 

  getCurrentDebtor() {
    axios({
      mode: "no-cors",
      method: "get",
      url: `http://localhost:5000/debtor/${this.state.currentId}`,
    })
      .then((response) => {
        console.log(response);
        console.log(this.state.currentId);
        this.setState({
          currentDebtor: response.data,
          firstName: response.data.firstName,
        });
        console.log(this.state.currentDebtor);
      })
      .catch((error) => {
        console.log("Unable to get debtor", error);
      });
  }

  componentDidMount() {
    this.getCurrentDebtor();
  }

  render() {
    const {
      firstName,
      lastName,
      address1,
      address2,
      amountOwed,
      employer,
      employerPhoneNumber,
      interest,
      phoneNumber,
      spouse,
      spouseEmployer,
      spouseEmployerPhoneNumber,
      spousePhoneNumber,
      ssn,
    } = this.state.currentDebtor;

    return (
      <div className="debtor-wrapper">
        <div className="debtor-detail">
          <div className="debtor-detail__debtor-detail-wrapper">
            <div className="debtor-detail__debtor-detail-wrapper__row-one">
              <div className="debtor-detail__debtor-detail-wrapper__row-one-left">
                <tr>Debtor Name</tr>
              </div>

              <div className="debtor-detail__debtor-detail-wrapper__row-one-right">
                <tr>
                  {firstName} {lastName}
                </tr>
              </div>
            </div>
            <div className="debtor-detail__debtor-detail-wrapper__row-one">
              <div className="debtor-detail__debtor-detail-wrapper__row-one-left">
                <tr>Phone Number</tr>
              </div>

              <div className="debtor-detail__debtor-detail-wrapper__row-one-right">
                <tr>{phoneNumber}</tr>
              </div>
            </div>
            <div className="debtor-detail__debtor-detail-wrapper__row-one">
              <div className="debtor-detail__debtor-detail-wrapper__row-one-left">
                <tr>SSN</tr>
              </div>

              <div className="debtor-detail__debtor-detail-wrapper__row-one-right">
                <tr>{ssn}</tr>
              </div>
            </div>
            <div className="debtor-detail__debtor-detail-wrapper__row-one">
              <div className="debtor-detail__debtor-detail-wrapper__row-one-left">
                <tr>Address 1</tr>
              </div>

              <div className="debtor-detail__debtor-detail-wrapper__row-one-right">
                <tr>{address1}</tr>
              </div>
            </div>
            <div className="debtor-detail__debtor-detail-wrapper__row-one">
              <div className="debtor-detail__debtor-detail-wrapper__row-one-left">
                <tr>Address 2</tr>
              </div>

              <div className="debtor-detail__debtor-detail-wrapper__row-one-right">
                <tr>{address2}</tr>
              </div>
            </div>
            <div className="debtor-detail__debtor-detail-wrapper__row-one">
              <div className="debtor-detail__debtor-detail-wrapper__row-one-left">
                <tr>Amount Owed</tr>
              </div>

              <div className="debtor-detail__debtor-detail-wrapper__row-one-right">
                <tr>${amountOwed}</tr>
              </div>
            </div>
            <div className="debtor-detail__debtor-detail-wrapper__row-one">
              <div className="debtor-detail__debtor-detail-wrapper__row-one-left">
                <tr>Interest</tr>
              </div>

              <div className="debtor-detail__debtor-detail-wrapper__row-one-right">
                <tr>{interest}%</tr>
              </div>
            </div>
          </div>
          <div className="debtor-detail__related-contact-info">
            <div className="debtor-detail__related-contact-info__row-one">
              <div className="debtor-detail__related-contact-info__row-one-left">
                <tr>Deptor Employer</tr>
              </div>

              <div className="debtor-detail__related-contact-info__row-one-right">
                <tr>{employer}</tr>
              </div>
            </div>
            <div className="debtor-detail__related-contact-info__row-one">
              <div className="debtor-detail__related-contact-info__row-one-left">
                <tr>Employer Phone Number</tr>
              </div>

              <div className="debtor-detail__related-contact-info__row-one-right">
                <tr>{employerPhoneNumber}</tr>
              </div>
            </div>

            <div className="debtor-detail__related-contact-info__row-one">
              <div className="debtor-detail__related-contact-info__row-one-left">
                <tr>Spouse Phone Number</tr>
              </div>

              <div className="debtor-detail__related-contact-info__row-one-right">
                <tr>{spousePhoneNumber}</tr>
              </div>
            </div>
            <div className="debtor-detail__related-contact-info__row-one">
              <div className="debtor-detail__related-contact-info__row-one-left">
                <tr>Spouse Emplyer</tr>
              </div>

              <div className="debtor-detail__related-contact-info__row-one-right">
                <tr>{spouseEmployer}</tr>
              </div>
            </div>
            <div className="debtor-detail__related-contact-info__row-one">
              <div className="debtor-detail__related-contact-info__row-one-left">
                <tr>Spouse Empoyer Number</tr>
              </div>

              <div className="debtor-detail__related-contact-info__row-one-right">
                <tr>{spouseEmployerPhoneNumber}</tr>
              </div>
            </div>
            <div className="debtor-detail__related-contact-info__row-one">
              <div className="debtor-detail__related-contact-info__row-one-left">
                <tr>spouse</tr>
              </div>

              <div className="debtor-detail__related-contact-info__row-one-right">
                <tr>{spouse}</tr>
              </div>
            </div>
          </div>
          <div className="debtor-detail__payments">
            <div className="debtor-detail__payments-wrapper">
              <div className="debtor-detail__payments-header">Payments</div>
              <button onClick={() => this.handleOpenModal()}> Add Payment</button>
              <AddPaymentModal
                debtorID = {this.state.currentId}
                modalIsOpen={this.state.showModal}
                handleModalClose={this.handleModalClose}
              />
            </div>
            <div className="debtor-detail__payments-info-wrapper"></div>
          </div>
        </div>
        <div className="activity-wrapper">Activity</div>
      </div>
    );
  }
}
