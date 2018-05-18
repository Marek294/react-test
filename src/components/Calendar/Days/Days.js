import React, { Component } from 'react';
import Day from './Day/Day';

class Days extends Component {
    render() {
        const { CalendarDataObj, onEventEdit } = this.props;
        return [1, 2, 3, 4, 5, 6, 7].map(day_number => <Day key={day_number}
                                                            CalendarDataObj={CalendarDataObj} 
                                                            day_number={day_number} 
                                                            onEventEdit={onEventEdit}  /> )
    }
}

export default Days;