import React, { Component } from 'react';
import TableBody from '../TableBody/TableBody';
import TableHeader from '../TableHeader/TableHeader';
import Days from '../Days/Days';
import './Body.css';

class Body extends Component {
    render() {
        const { CalendarDataObj, onEventEdit } = this.props;

        return (
            <div className="table">
                <div className="events" >
                    <Days CalendarDataObj={CalendarDataObj} onEventEdit={onEventEdit} />
                </div>
                <table>
                    <TableHeader />
                    <TableBody />
                </table>
            </div>
        );
    }
}

export default Body;