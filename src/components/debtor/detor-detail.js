import React, { Component } from "react";
import axios from "axios";

import AddPaymentModal from "../payments/add-payment-modal";
import DebtorActivity from "./debtor-activity";
import NoteModal from "./Note/note-modal";
import PhoneNoteModal from "./phone/phone-note-modal";
import AllNotes from "./Note/all-notes";
import AllPhoneNotes from "./phone/all-phone-notes";
import AllPayments from "../payments/all-payment";

export default class DebtorDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentId: this.props.match.params.slug,
      currentDebtor: {},
      firstName: "",
      showModal: false,
      showNoteModal: false,
      showPhoneNoteModal: false,
      note: [],
      payments: [],
      phoneNote: [],
    };
    this.getCurrentDebtor = this.getCurrentDebtor.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
  }

  handleOpenModal = () => {
    this.setState({ showModal: true });
  };

  handleModalClose = () => {
    this.setState({ showModal: false });
  };

  getCurrentDebtor() {
    axios({
      mode: "no-cors",
      method: "get",
      url: `http://localhost:5000/debtor/${this.state.currentId}`,
    })
      .then((response) => {
        this.setState({
          currentDebtor: response.data,
          firstName: response.data.firstName,
        });
      })
      .catch((error) => {
        console.log("Unable to get debtor", error);
      });
  }

  getNotes() {
    let allNotes = `http://localhost:5000/debtor/${this.state.currentId}/allnotes`;
    let allPayments = `http://localhost:5000/debtor/${this.state.currentId}/allpayments`;
    let allPhoneNotes = `http://localhost:5000/debtor/${this.state.currentId}/allphonenotes`;

    const requestNote = axios({
      mode: "no-cors",
      method: "get",
      url: allNotes,
    });

    const requestPayments = axios({
      mode: "no-cors",
      method: "get",
      url: allPayments,
    });

    const requestPhoneNotes = axios({
      mode: "no-cors",
      method: "get",
      url: allPhoneNotes,
    });

    axios
      .all([requestNote, requestPayments, requestPhoneNotes])
      .then(
        axios.spread((...response) => {
          const note = response[0];
          const payments = response[1];
          const phoneNotes = response[2];

          this.setState({
            note: this.state.note.concat(note.data),
            payments: this.state.payments.concat(payments.data),
            phoneNote: this.state.phoneNote.concat(phoneNotes.data),
          });
          console.log(this.state.phoneNote, this.state.payments);
        })
      )
      .catch((error) => {
        console.log("unable to get note datat", error);
      });
  }

  componentDidMount() {
    this.getCurrentDebtor();
    this.getNotes();
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

    const noteRecords = this.state.note.map((noteRecord) => {
      return <AllNotes key={noteRecord.id} noteRecord={noteRecord} />;
    });

    const allPhoneRecords = this.state.phoneNote.map((phoneRecords) => {
      return (
        <AllPhoneNotes key={phoneRecords.id} phoneRecords={phoneRecords} />
      );
    });

    const allPayments = this.state.payments.map((paymentRecords) => {
      console.log(paymentRecords.paymentAmount);
      return (
        <AllPayments key={paymentRecords.id} paymentRecords={paymentRecords} />
      );
    });

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
        </div>
        <div className="add-activity-wrapper">
          <div className="add-activity-wrapper__header">Activity</div>

          <div className="add-activity-wrapper__add-activity">
            <div className="add-activity-wrapper__add-activity-note">
              <div className="add-activity-wrapper__add-activity-note__wrapper">
                <div className="add-activity-wrapper__add-activity-note__wrapper__header">
                  <a>Notes</a>
                </div>
                <button
                  className="add-activity-wrapper__add-activity-note__wrapper__button"
                  onClick={() => this.setState({ showNoteModal: true })}
                >
                  Add Note
                </button>
                <NoteModal
                  debtorID={this.state.currentId}
                  noteModalIsOpen={this.state.showNoteModal}
                  handleNoteModalClose={() =>
                    this.setState({ showNoteModal: false })
                  }
                />
              </div>
              <div className="add-activity-wrapper__add-activity-note-activity">
                {noteRecords}
              </div>
            </div>

            <div className="add-activity-wrapper__add-activity-payments">
              <div className="add-activity-wrapper__add-activity-payments__wrapper">
                <div className="add-activity-wrapper__add-activity-note__wrapper__header">
                  Payments
                </div>

                <button
                  onClick={() => this.handleOpenModal()}
                  className="add-activity-wrapper__add-activity-note__wrapper__button"
                >
                  Add Payment
                </button>
                <AddPaymentModal
                  debtorID={this.state.currentId}
                  modalIsOpen={this.state.showModal}
                  handleModalClose={this.handleModalClose}
                />
              </div>
              <div className="add-activity-wrapper__payments-activity">
                {allPayments}
              </div>
            </div>
            <div className="add-activity-wrapper__add-activity-phone">
              <div className="add-activity-wrapper__add-activity-phone__wrapper">
                <div className="add-activity-wrapper__add-activity-phone__wrapper__header">
                  Phone Call Notes
                </div>
                <button
                  onClick={() => this.setState({ showPhoneNoteModal: true })}
                  className="add-activity-wrapper__add-activity-note__wrapper__button"
                >
                  Add Call Notes
                </button>
                <PhoneNoteModal
                  debtorID={this.state.currentId}
                  phoneModalIsOpen={this.state.showPhoneNoteModal}
                  handlePhoneModalClose={() =>
                    this.setState({ showPhoneNoteModal: false })
                  }
                />
              </div>
              <div className="add-activity-wrapper__phone-note-activity">
                {allPhoneRecords}
              </div>
            </div>
          </div>
          {/* <DebtorActivity /> */}
        </div>
      </div>
    );
  }
}