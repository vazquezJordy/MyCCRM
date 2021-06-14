import React, { Component } from 'react';

class DebtorCard extends Component {

    render() {
        return (
            <div>
                <h1>{this.props.firstName}</h1>
            </div>
        );
    }
}

export default DebtorCard