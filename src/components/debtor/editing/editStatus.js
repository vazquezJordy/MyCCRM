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
    this.changeStatus = this.changeStatus.bind(this);
    // this.handleModalClose = this.handleModalClose.bind(this);
  }

  handleChange(event) {
    this.setState({
      status: event.target.value
    });
  }

  handleModalClose(event) {
    this.props.handleEditStatusModalClose();
  }

  changeStatus(event) {
    axios({
      mode: "no-cors",
      method: "put",
      url: `https://mycrmdbpython.herokuapp.com/debtor/${this.state.currentID}/updatestatus`,
      data: {
        status: this.state.status,
      },
    }).then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
    this.handleModalClose()
  }



  render() {
    var status = this.state.status
    return (
      <div className="note-modal">
        <ReactModal
          style={this.customStyles}
          onRequestClose={() => {
            this.props.handleEditStatusModalClose();
          }}
          isOpen={this.props.editModalIsOpen}
        >
          <div className="editStatus" >
          <label className="labels" id="status" >
              Status:
              <select
                id="status"
                name="status"
                value={this.state.status}
                onChange={this.handleChange}
              >
                
                <option value="No Contact">No Contact</option>
                <option value="1st Contact">1st Contact</option>
                <option value="2nd Contact">2nd Contact</option>
                <option value="3rd Contact">3rd Contact</option>
                <option value="Do not call">Do not call</option>
                <option value="Pre-Legal">Pre-Legal</option>
                <option value="Legal">Legal</option>
              </select>
              <button className="btn" onClick={this.changeStatus}>Submit</button>
            </label>
            
          </div>
        </ReactModal>
      </div>
    );
  }
}
