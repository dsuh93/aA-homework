import React from 'react';

const Counts = ({ previousCounts }) => (
    <ul>
        {
            previousCounts.map((count, idx) => <li key={idx}>{count}</li>)
        }
    </ul>
);

export default Counts;
