import React, { Component } from 'react';

export default class DebtorSegment extends Component {
    render() {
        return (
            <div className='debtor-segment'>
                <div className='debtor-segment__headers'>
                        <div className='debtor-segment__headers__header'>No contact</div>
                        <div className='debtor-segment__headers__header'>First Contact Attemt</div>
                        <div className='debtor-segment__headers__header'>First Contact Attemt</div>
                        <div className='debtor-segment__headers__header'>First Contact Attemt</div>
                        <div className='debtor-segment__headers__header'>Call back scheduled</div>
                        <div className='debtor-segment__headers__header'>Sent to legal</div>
                        <div className='debtor-segment__headers__header'>Cease and disist</div>
                </div>
                <div className='debtor-segment__columns'>
                <div className='debtor-segment__columns__column'><h1>Hello</h1></div>
                <div className='debtor-segment__columns__column'><h1>Hello</h1></div>
                <div className='debtor-segment__columns__column'><h1>Hello</h1></div>
                <div className='debtor-segment__columns__column'><h1>Hello</h1></div>
                <div className='debtor-segment__columns__column'><h1>Hello</h1></div>
                <div className='debtor-segment__columns__column'><h1>Hello</h1></div>
                <div className='debtor-segment__columns__column'><h1>Hello</h1></div>
                </div>
            </div>
        );
    }
}