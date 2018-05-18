import React from 'react';

const getHour = hour => {
    const timeHour = hour + 8;
    const from = timeHour >= 10 ? `${timeHour}:00` : `0${timeHour}:00`;
    const to = timeHour + 1 >= 10 ? `${timeHour + 1}:00` : `0${timeHour + 1}:00`;

    return `${from} - ${to}`;
}

const onDragStart = (e, id) => e.dataTransfer.setData('id', id);

const Event = (props) => {
    const { item, topPosition } = props;
    const { patient } = item;

    return (
        <a href="" onDragStart={e => onDragStart(e,item.id)}>
            <div className="event q4 past" draggable style={{top: `${topPosition}px`}} >
                <p className="hours">{getHour(item.start_hour)}</p>
                <p className="description">{patient.salutation} {patient.firstname} {patient.lastname}</p>
                <span className="icon"></span>
            </div>
        </a>
    );
};

export default Event;