import React, { Component } from 'react';
import './Artist.css';
import { Link } from 'react-router-dom';
import { ListGroupItem } from 'react-bootstrap';

class Artist extends Component {
    onChoseArtist = (artist) => {
        localStorage.clear();
        localStorage.setItem('artistData', JSON.stringify(artist));
    }

    render() {
        return (
            <div className="Artist">
                {/* <li key={this.props.artist.name}> */}
                <ListGroupItem>
                    <Link
                        to={'/artist/' + this.props.artist.name}
                        onClick={() => { this.onChoseArtist(this.props.artist).bind(this) }}>
                        {this.props.artist.name}
                    </Link>
                </ListGroupItem>
            </div>
        )
    }
}

export default Artist;