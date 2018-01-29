import React, { Component } from 'react';
import './Artist.css';
import { Link } from 'react-router-dom';

const Artist = (props) => {
    return (
        <div className="Artist">
            <li key={props.artist.name}><Link to={'/artist=' + props.artist.name} onClick = {() => {props.chosenArtist(props.artist)}}>
                {props.artist.name}
                </Link>
            </li>
        </div>
    )
}

export default Artist;