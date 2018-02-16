import React from 'react';
import './Song.css';
import '../../containers/AlbumsInfo/AlbumsInfo.css';

const Song = (props) => {
    return(
        <tr>
            <td>{props.id}</td>
            <td>{props.title}</td>
            <td>{props.duration}</td>
        </tr>
    )
}

export default Song;