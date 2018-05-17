import React from 'react';

const TableRow = (props) => {
    const { time } = props;
    return (
        <tr>
            <td className="hour">{time}</td>
            <td ></td>
            <td ></td>
            <td className="active"></td>
            <td ></td>
            <td ></td>
            <td ></td>
            <td ></td>
        </tr>
    );
};

export default TableRow;