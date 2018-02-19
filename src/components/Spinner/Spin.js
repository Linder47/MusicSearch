import React from 'react';
import './Spin.css';

const Spin = (props) => {
    return (
        <div className="sk-chasing-dots">
            <div className="sk-child sk-dot1"></div>
            <div className="sk-child sk-dot2"></div>
        </div>
    )
}

export default Spin;