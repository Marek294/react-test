import React, { Component } from 'react';
import Event from '../../Event/Event';

class Day extends Component {
    getHour(hour) {
        const timeHour = hour + 8;
        const from = timeHour >= 10 ? `${timeHour}:00` : `0${timeHour}:00`;
        const to = timeHour+1 >= 10 ? `${timeHour+1}:00` : `0${timeHour+1}:00`;

        return `${from} - ${to}`; 
    }

    render() {
        const { CalendarDataObj, day_number, onDragEnter, onDragOver, onDrop } = this.props;
        const topMultiplier = 132;

        const display = CalendarDataObj
            .filter(item => item.day_number === day_number)
            .map((item, i) => {
                const topPosition = item.start_hour * topMultiplier;

                return (<Event  key={i}
                                topPosition={topPosition}
                                onDragEnter={onDragEnter}
                                item={item}
                                getHour={() => this.getHour(item.start_hour)} />)
            })

        return (
            <div className="day" onDragOver={onDragOver} onDrop={onDrop} data-day={day_number}>
                {display}
            </div>
        )
    }
}

export default Day;