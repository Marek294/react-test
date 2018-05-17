import React, { Component } from 'react';
import CalendarHeader from '../Header/Header';
import './Calendar.css';

class Calendar extends Component {
    render() {
        return (
            <div className='calendar'>
                <CalendarHeader />
                <h1>CalendarComponent</h1>
            </div>
        );
    }
}

export default Calendar;