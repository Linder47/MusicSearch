import React, { Component } from 'react';
import './Artist.css';
import { ListGroupItem } from 'react-bootstrap';

class Artist extends Component {
    onChoseArtist = (artist) => {
        // sessionStorage.clear();
        sessionStorage.setItem('artistData', JSON.stringify(artist));
    }

    render() {
        return (
            <div className="artist">
                <ListGroupItem
                    className="artist__item"
                    href={'/MusicSearch/artist/' + this.props.artist.name}
                    onClick={() => { this.onChoseArtist(this.props.artist) }}>
                    {this.props.artist.name}

                </ListGroupItem>
            </div>
        )
    }
}

export default Artist;