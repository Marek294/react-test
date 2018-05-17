import React, { Component } from 'react';
import TableRow from '../TableRow/TableRow';
import TableHeader from '../TableHeader/TableHeader';
import './Body.css';

class Body extends Component {
    state = {
        currentItem: {}
    }

    getHour(hour) {
        const timeHour = hour + 8;
        if(hour+8 >= 10) return `${timeHour}:00`;
        else return `0${timeHour}:00`;
    }

    onDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const { currentItem } = this.state;
        const topMultiplier = 132;
        const day_number = parseInt(e.target.dataset.day, 10);
        
        if(e.target.className.includes('day') && currentItem.id) {

            const start_hour = parseInt(e.nativeEvent.layerY / topMultiplier, 10);
            //const start_hour = parseInt((table.scrollTop+e.screenY-topStart) / topMultiplier, 10);

            const changedItem = {
                ...currentItem,
                start_hour,
                day_number
            }

            this.props.onEventEdit(e, changedItem);
        }
        
        this.setState({
            currentItem: {}
        })
    }

    onDragEnter = (e, currentItem) => {
        const { currentItem : stateItem } = this.state;

        if(!stateItem.id)
            this.setState({
                currentItem
            })
    }

    onDragOver = e => {
        e.preventDefault();
    }

    renderDay = (CalendarDataObj, day_number) => {
        const topMultiplier = 132;

        const display = CalendarDataObj
            .filter(item => item.day_number === day_number)
            .map((item, i) => {
                const topPosition = item.start_hour * topMultiplier;
                const { patient } = item;
                return (
                    <a key={`${day_number}_${i}`} href="">
                        <div className="event q4 past" draggable="true" style={{top: `${topPosition}px`}} onDragEnter={e =>this.onDragEnter(e, item)}>
                            <p className="hours">{this.getHour(item.start_hour)} - {this.getHour(item.start_hour + 1)}</p>
                            <p className="description">{patient.salutation} {patient.firstname} {patient.lastname}</p>
                            <span className="icon"></span>
                        </div>
                    </a>
                )
            })

        return (
            <div className="day" onDragOver={this.onDragOver} onDrop={this.onDrop} data-day={day_number}>
                {display}
            </div>
        )
    }

    renderDays = (CalendarDataObj) => {
        return [
            this.renderDay(CalendarDataObj, 1),
            this.renderDay(CalendarDataObj, 2),
            this.renderDay(CalendarDataObj, 3),
            this.renderDay(CalendarDataObj, 4),
            this.renderDay(CalendarDataObj, 5),
            this.renderDay(CalendarDataObj, 6),
            this.renderDay(CalendarDataObj, 7),
        ]
    }

    render() {
        const { CalendarDataObj } = this.props;

        return (
            <div className="table">
                <div className="events" >
                    {this.renderDays(CalendarDataObj)}
                </div>
                <table>
                    <TableHeader />
                    <tbody>
                        <TableRow time="08:00"/>
                        <TableRow time="09:00"/>
                        <TableRow time="10:00"/>
                        <TableRow time="11:00"/>
                        <TableRow time="12:00"/>
                        <TableRow time="13:00"/>
                        <TableRow time="14:00"/>
                        <TableRow time="15:00"/>
                        <TableRow time="16:00"/>
                        <TableRow time="17:00"/>
                        <TableRow time="18:00"/>
                        <TableRow time="19:00"/>
                        <TableRow time="20:00"/>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Body;