import React, { Component } from "react";
import ReactModal from "react-modal";

import AddDebtorForm from "./add-debtor-form";

ReactModal.setAppElement(".app-wrapper");

export default class AddDebtorModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customStyles : {},
      viewport: {
        width: '',
        height: ''

      }
    }

    // const mediaQuery = window.matchMedia('(min-width: 650px)');

    // if (mediaQuery > document.documentElement.clientWidth) {
    //   console.log('jordy v the future')
    // }
    

    if(document.documentElement.clientWidth < 700) {
    this.customStyles = {
      content: {
        top: "25%",
        left: "50%",
        right: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -20%",
        width: "400px",
        height: "600px",
        backgroundColor: "#3E3D3D",
      },
      overlay: {
        backgroundColor: "rgba(1, 1, 1, 0.75)",
      },
    }
  } else {
    this.customStyles = {
      content: {
        top: "50%",
        left: "50%",
        right: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%",
        width: "800px",
        height: "500px",
        backgroundColor: "#3E3D3D",
      },
      overlay: {
        backgroundColor: "rgba(1, 1, 1, 0.75)",
      },
    }

  }
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
          <AddDebtorForm />
          <div className="modal-btns">
            <button onClick={this.props.handleModalClose}>Close</button>
          </div>
        </ReactModal>
      </div>
    );
  }
}
