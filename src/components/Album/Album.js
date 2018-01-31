import React, { Component } from 'react';
import './Album.css';

const Album = (props) => {
    return (
        <div className='album'>
            <img src={props.image} alt={props.key} />
        </div>
    )
}

export default Album;