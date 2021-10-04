import React from 'react';
import './History.css';

const History = ({ historyHeight }) => {
    const historyStyle = {
        height: historyHeight + "px"
    }

    return (
        <section 
            class="history"
            style={historyStyle}>
        </section>
    );
}

export default History;