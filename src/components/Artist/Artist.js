import React, { Component } from 'react';
import './Artist.css';
import { Link } from 'react-router-dom';
import { ListGroupItem } from 'react-bootstrap';

class Artist extends Component {
    onChoseArtist = (artist) => {
        sessionStorage.clear();
        sessionStorage.setItem('artistData', JSON.stringify(artist));
        //localStorage.setItem('searchingArtist', JSON.stringify(this.props.searchingArtist));
    }

    // onChoseArtist = (artist) => {
    //     localStorage.clear();
    //     localStorage.setItem('artistData', JSON.stringify(artist));
    //     //localStorage.setItem('searchingArtist', JSON.stringify(this.props.searchingArtist));
    // }

    render() {
        return (
            <div className="artist">
                <ListGroupItem
                    className="artist__list-group-item"
                    href={'/artist/' + this.props.artist.name}
                    onClick={() => { this.onChoseArtist(this.props.artist).bind(this) }}>
                    {this.props.artist.name}

                </ListGroupItem>
            </div>
        )
    }
}

export default Artist;