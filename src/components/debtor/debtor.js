import React, { Component } from 'react';
import DebtorSegment from './debtorSegment';

 class Deptor extends Component {
    render() {
        return (
            <div className='debtor-wrapper'> 
            <DebtorSegment/>
            </div>
        );
    }
}

export default Deptor