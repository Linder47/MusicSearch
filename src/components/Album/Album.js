import React from 'react';
import './Album.css';
import { Image } from 'react-bootstrap';

const Album = (props) => {
    // if (props.image !== '') {
        return (
            <div className='album'>
                <Image src={props.image} alt={props.id} rounded />
            </div>
        )
    // }
}

export default Album;