import React from 'react';

const TableHeader = () => {
    return (
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
    );
};

export default TableHeader;