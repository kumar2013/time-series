import React from 'react';


const TableBody = ({ data: { good, median, bad }, months }) => {
    const rows = months.map((entry, idx) => (
        <tr key={idx}>
            <td>{entry}</td>
            <td>{good[idx]}</td>
            <td>{median[idx]}</td>
            <td>{bad[idx]}</td>
        </tr>
    ));

    return (
        <tbody>
            {rows}
        </tbody>
    );
}


export default TableBody;
