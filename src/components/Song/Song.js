import React from 'react';
import './Song.css';
import '../../containers/AlbumsInfo/AlbumsInfo.css';

const Song = (props) => {
    return(
        <tr>
            <td>{props.id}</td>
            <td>{props.title}</td>
            <td>{parseInt(props.duration/60, 10)}:{props.duration%60 < 10 ? '0'+props.duration%60 : props.duration%60}</td>
        </tr>
    )
}

export default Song;