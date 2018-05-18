import React, { Component } from 'react';
import CalendarHeader from './Header/Header';
import CalendarBody from './Body/Body';
import './Calendar.css';

class Calendar extends Component {
    state = {
        calendarData: [
            {
            "id": 1,
            "doctor": {
                "account_id": 7,
                "id": 1,
                "title": "Blue Walker"
            },
            "patient": {
                "id": 2,
                "salutation": "Mrs.",
                "firstname": "Anna",
                "lastname": "A.",
                "gender": 0,
                "notify_email": false,
                "notify_sms": false,
                "language": "de"
            },
            "start_time": "2015-11-11 09:00:00",
            "end_time": "2015-11-11 10:00:00",
            "start_hour": 0,
            "day_number": 1
            },
            {
                "id": 2,
                "doctor": {
                    "account_id": 7,
                    "id": 1,
                    "title": "Blue Walker"
                },
                "patient": {
                    "id": 2,
                    "salutation": "Mr.",
                    "firstname": "Test",
                    "lastname": "B.",
                    "gender": 0,
                    "notify_email": false,
                    "notify_sms": false,
                    "language": "de"
                },
                "start_time": "2015-11-11 09:00:00",
                "end_time": "2015-11-11 10:00:00",
                "start_hour": 1,
                "day_number": 2
                }
        ]
    }

    onEventEditCallback = (e, changeData) => {
        const { calendarData } = this.state;
        const { start_hour, day_number } = changeData;

        const changedIndex = calendarData.findIndex( item => item.id === changeData.id);

        const saveItem = Object.assign(calendarData[changedIndex], { start_hour, day_number });

        this.setState({
            calendarData: [
                ...this.state.calendarData.slice(0,changedIndex),
                saveItem,
                ...this.state.calendarData.slice(changedIndex+1)
            ]
        })

    }

    render() {
        const { calendarData } = this.state;

        return (
            <div className='calendar'>
                <CalendarHeader />
                <CalendarBody CalendarDataObj={calendarData} onEventEdit={this.onEventEditCallback}/>
            </div>
        );
    }
}

export default Calendar;