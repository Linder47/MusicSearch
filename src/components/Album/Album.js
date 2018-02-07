import React  from 'react';
import './Album.css';

const Album = (props) => {
    return (
        <div className='album'>
        <img src={props.image} alt={props.id} />
        </div>
    )
}

export default Album;