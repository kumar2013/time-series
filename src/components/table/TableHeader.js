import React from 'react';


const TableHeader = () => {
    const headers = ['month', 'good', 'median', 'bad'];

    const tableHeader = headers.map((entry, idx) => <th key={idx}>{entry}</th>);

    return (
        <thead>
            <tr style={{textTransform: 'capitalize'}}>
                {tableHeader}
            </tr>
        </thead>
    );
}


export default TableHeader;
