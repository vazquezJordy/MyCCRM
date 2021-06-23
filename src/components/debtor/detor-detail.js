import axios from 'axios';
import React, { Component } from 'react';

export default class DebtorDetail extends Component {
    constructor(props) {
        super(props)

        this.state = {
            currentId: this.props.match.params.slug,
            currentDebtor: [],
            firstName: '',
        }
        this.getCurrentDebtor = this.getCurrentDebtor.bind(this);
        
    }

    getCurrentDebtor(){
        axios({
            mode: "no-cors",
            method: "get",
            url: `http://localhost:5000/debtor/${this.state.currentId}`,
          })
          .then(response => {
              console.log(response)
              this.setState({
                currentDebtor: this.state.currentDebtor.concat(response.data),
                firstName: response.data.firstName
              });
              console.log(this.state.currentDebtor)
          }) 
          .catch(error => {
              console.log("Unable to get debtor", error)
          })
    }

    componentDidMount(){
        this.getCurrentDebtor();
    }

    render() {
        const {
            firstName,
            lastName,
        } = this.state.currentDebtor

        return (
            <div className='debtor-detail-wrapper'>
                <h3>{this.state.firstName}{lastName} hello</h3>
            </div>
        );
    }
}