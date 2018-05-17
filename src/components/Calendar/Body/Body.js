import React from 'react';
import './Body.css';

const Body = () => {
    return (
        <div className="table">
            <div className="events">
                <div className="day" data-day="1">
                    <a href=""><div className="event q4 past" draggable="true" style={{top: '0px'}}>
                        <p className="hours">08:00 - 09:00</p>
                        <p className="description">Meier</p>
                        <span className="icon"></span>
                    </div></a>
                </div>
                <div className="day" data-day="2">

                </div>
                <div className="day" data-day="3">

                </div>
                <div className="day" data-day="4">

                </div>
                <div className="day" data-day="5">

                </div>
                <div className="day"  data-day="6"></div>
                <div className="day" data-day="7"></div>
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
};

export default Body;