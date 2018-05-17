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
        const topMultiplier = 120;
        const topStart = 243;
        const { table } = this.refs;
        const day = e.target.dataset.day;

        console.log(table.scrollTop, e.screenY);

        const start_hour = parseInt((table.scrollTop+e.screenY-topStart) / topMultiplier);

        const changedItem = {
            ...currentItem,
            start_hour
        }

        this.props.onEventEdit(e, changedItem);
        
        this.setState({
            currentItem: {}
        })
    }

    onDragEnter = (currentItem) => {
        this.setState({
            currentItem
        })
    }

    onDragOver = e => {
        e.preventDefault();
    }

    render() {
        const { CalendarDataObj } = this.props;
        const topMultiplier = 132;

        const displayDay1 = CalendarDataObj.map((item, i) => {
            const topPosition = item.start_hour * topMultiplier;
            const { patient } = item;
            return (
                <a href="">
                    <div className="event q4 past" draggable="true" style={{top: `${topPosition}px`}} onDragEnter={() => this.onDragEnter(item)}>
                        <p className="hours">{this.getHour(item.start_hour)} - {this.getHour(item.start_hour + 1)}</p>
                        <p className="description">{patient.salutation} {patient.firstname} {patient.lastname}</p>
                        <span className="icon"></span>
                    </div>
                </a>
            )
        })

        return (
            <div ref="table" className="table">
                <div className="events" >
                    <div className="day" onDragOver={this.onDragOver} onDrop={this.onDrop} data-day="1">
                        {displayDay1}
                    </div>
                    <div className="day" onDragOver={this.onDragOver} onDrop={this.onDrop} data-day="2">

                    </div>
                    <div className="day" onDragOver={this.onDragOver} onDrop={this.onDrop} data-day="3">

                    </div>
                    <div className="day" onDragOver={this.onDragOver} onDrop={this.onDrop} data-day="4">

                    </div>
                    <div className="day" onDragOver={this.onDragOver} onDrop={this.onDrop} data-day="5">

                    </div>
                    <div className="day" onDragOver={this.onDragOver} onDrop={this.onDrop} data-day="6">

                    </div>
                    <div className="day" onDragOver={this.onDragOver} onDrop={this.onDrop} data-day="7">

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