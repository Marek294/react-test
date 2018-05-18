import React, { Component } from 'react';
import Event from '../../Event/Event';

class Day extends Component {
    onDragOver = e => e.preventDefault();

    onDrop = e => {
        e.preventDefault();
        const itemId = parseInt(e.dataTransfer.getData('id'),10);
        const topMultiplier = 132;
        const day_number = parseInt(e.target.dataset.day, 10);
        if(e.target.className.includes('day')) {
            
            const start_hour = parseInt(e.nativeEvent.layerY / topMultiplier, 10);

            const changeData = {
                id: itemId,
                start_hour,
                day_number
            }
            
            this.props.onEventEdit(e, changeData);
        }
    }

    render() {
        const { CalendarDataObj, day_number } = this.props;
        const topMultiplier = 132;

        const display = CalendarDataObj
            .filter(item => item.day_number === day_number)
            .map((item, i) => (
                <Event key={i}
                    topPosition={item.start_hour * topMultiplier}
                    item={item} />
            )
            )

        return (
            <div className="day" onDragOver={this.onDragOver} onDrop={this.onDrop} data-day={day_number}>
                {display}
            </div>
        )
    }
}

export default Day;