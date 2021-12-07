import React, { Component } from "react";
import ReactModal from "react-modal";
import axios from "axios";

export default class EditStatusModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: "",
      currentID: this.props.debtorID,
    };

    this.customStyles = {
      content: {
        top: "50%",
        left: "50%",
        right: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%",
        width: "175px",
        height: "200px",
        backgroundColor: "White",
      },
      overlay: {
        backgroundColor: "rgba(1, 2, 3, 0.75)",
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.getCurrentStatus = this.getCurrentStatus.bind(this);
    // this.handleModalClose = this.handleModalClose.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  // handleModalClose(event) {
  //   this.props.handleNoteModalClose();
  // }

  getCurrentStatus() {
    // event.preventDefault();
    axios({
      mode: "no-cors",
      method: "get",
      url: `http://localhost:5000/debtor/1`,
    })
      .then((response) => {
        this.setState({
          status: response.data.status
        }),console.log(response.data);
        
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.getCurrentStatus();
    console.log(this.state.status)
  }

  render() {
    return (
      <div className="note-modal">
        <ReactModal
          style={this.customStyles}
          onRequestClose={() => {
            this.props.handleNoteModalClose();
          }}
          isOpen={this.props.editModalIsOpen}
        >
          <div className="editStatus">
          <label className="labels" id="status">
              Status:
              <select
                id="status"
                name="status"
                value={this.state.status}
                onChange={this.handleChange}
              >
                <option value={null}></option>
                <option value="No Contact">No Contact</option>
                <option value="1st Contact">1st Contact</option>
                <option value="2nd Contact">2nd Contact</option>
                <option value="3rd Contact">3rd Contact</option>
                <option value="Do not call">Do not call</option>
                <option value="Pre-Legal">Pre-Legal</option>
                <option value="Legal">Legal</option>
              </select>
            </label>
          </div>
        </ReactModal>
      </div>
    );
  }
}
