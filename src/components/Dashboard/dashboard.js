import React, { Component } from 'react';
import Collected from './home';
import RecentContacts from './recents';

class Dashboard extends Component {
    render() {
        return (
            <div className='dashboard-wrapper'>
                <RecentContacts />
                <Collected /> 
            </div>
        );
    }
}

export default Dashboard