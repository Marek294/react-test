import React, { Component } from 'react';
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
        const { currentItem } = this.state;
        const topMultiplier = 132;
        const topStart = 200;
        const { table, events } = this.refs;
        const day_number = parseInt(e.target.dataset.day, 10);
        
        if(!e.target.className.includes('event') && currentItem.id) {

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
        this.setState({
            currentItem
        })
    }

    onDragOver = e => {
        e.preventDefault();
    }

    renderDay = (CalendarDataObj, day_number) => {
        const topMultiplier = 132;

        return CalendarDataObj
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
    }

    render() {
        const { CalendarDataObj } = this.props;

        const displayDay1 = this.renderDay(CalendarDataObj, 1);
        const displayDay2 = this.renderDay(CalendarDataObj, 2);
        const displayDay3 = this.renderDay(CalendarDataObj, 3);
        const displayDay4 = this.renderDay(CalendarDataObj, 4);
        const displayDay5 = this.renderDay(CalendarDataObj, 5);
        const displayDay6 = this.renderDay(CalendarDataObj, 6);
        const displayDay7 = this.renderDay(CalendarDataObj, 7);

        return (
            <div ref="table" className="table">
                <div ref="events" className="events" >
                    <div className="day" onDragOver={this.onDragOver} onDrop={this.onDrop} data-day="1">
                        {displayDay1}
                    </div>
                    <div className="day" onDragOver={this.onDragOver} onDrop={this.onDrop} data-day="2">
                        {displayDay2}
                    </div>
                    <div className="day" onDragOver={this.onDragOver} onDrop={this.onDrop} data-day="3">
                        {displayDay3}
                    </div>
                    <div className="day" onDragOver={this.onDragOver} onDrop={this.onDrop} data-day="4">
                        {displayDay4}
                    </div>
                    <div className="day" onDragOver={this.onDragOver} onDrop={this.onDrop} data-day="5">
                        {displayDay5}
                    </div>
                    <div className="day" onDragOver={this.onDragOver} onDrop={this.onDrop} data-day="6">
                        {displayDay6}
                    </div>
                    <div className="day" onDragOver={this.onDragOver} onDrop={this.onDrop} data-day="7">
                        {displayDay7}
                    </div>
                </div>
                <table>
                    <thead>
                        <tr>
                            <td>Uhrzeit</td>
                            <td>Mo 09.11.</td>
                            <td>Di 10.11.</td>
                            <td className="active">Mi 11.11.</td>
                            <td>Do 12.11.</td>
                            <td>Fr 13.11.</td>
                            <td className="free" >Sa 14.11.</td>
                            <td className="free" >So 15.11.</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="hour">08:00</td>
                            <td ></td>
                            <td ></td>
                            <td className="active"></td>
                            <td ></td>
                            <td ></td>
                            <td ></td>
                            <td ></td>
                        </tr>
                        <tr>
                            <td className="hour">09:00</td>
                            <td></td>
                            <td></td>
                            <td className="active"></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td className="hour">10:00</td>
                            <td></td>
                            <td></td>
                            <td className="active"></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td className="hour">11:00</td>
                            <td></td>
                            <td></td>
                            <td className="active"></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td className="hour">12:00</td>
                            <td></td>
                            <td></td>
                            <td className="active"></td>
                            <td></td>
                            <td ></td>
                            <td ></td>
                            <td ></td>
                        </tr>
                        <tr>
                            <td className="hour">13:00</td>
                            <td></td>
                            <td></td>
                            <td className="active"></td>
                            <td ></td>
                            <td ></td>
                            <td ></td>
                            <td ></td>
                        </tr>
                        <tr>
                            <td className="hour">14:00</td>
                            <td></td>
                            <td></td>
                            <td className="active"></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td className="hour">15:00</td>
                            <td></td>
                            <td></td>
                            <td className="active"></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td className="hour">16:00</td>
                            <td></td>
                            <td></td>
                            <td className="active"></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td className="hour">17:00</td>
                            <td></td>
                            <td></td>
                            <td className="active"></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td className="hour">18:00</td>
                            <td></td>
                            <td></td>
                            <td className="active"></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td className="hour">19:00</td>
                            <td></td>
                            <td></td>
                            <td className="active"></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td className="hour">20:00</td>
                            <td></td>
                            <td></td>
                            <td className="active"></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Body;