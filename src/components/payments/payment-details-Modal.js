import React, { Component } from 'react';

export default class PaymentDetailsModal extends Component {
    constructor(){
        super()

        this.state = {

            timeStamp:'',
            paymentAmount: '',
            dateDue:'',

        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name] : event.target.value
        });
        console.log(event.target.value)
    }

    handleSubmit() {

    }

    render() {
        return (
            <div className="payment-detail">
                <label className="payment-detail__payment">
                    <div>Payment amount</div>

                    <input 
                    className='inputField'
                    type='number'
                    name='paymentAmount'
                    value= {this.state.paymentAmount}
                    onChange= {this.handleChange}
                    />
                </label>
            </div>
        );
    }
}