import React from 'react';

const Event = (props) => {
    const { item, topPosition, getHour, onDragEnter } = props;
    const { patient } = item;

    return (
        <a href="">
            <div className="event q4 past" draggable="true" style={{top: `${topPosition}px`}} onDragEnter={e => onDragEnter(e, item)}>
                <p className="hours">{getHour()}</p>
                <p className="description">{patient.salutation} {patient.firstname} {patient.lastname}</p>
                <span className="icon"></span>
            </div>
        </a>
    );
};

export default Event;