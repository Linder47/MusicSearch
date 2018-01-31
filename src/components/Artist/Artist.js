import React, { Component } from 'react';
import './Artist.css';
import { Link } from 'react-router-dom';

class Artist extends Component { 
    // componentWillUnmount() {
    //     localStorage.setItem('artistData', JSON.stringify(this.props.artist));
    // }

    onChoseArtist = (artist) => {
        localStorage.clear();
        localStorage.setItem('artistData', JSON.stringify(artist));
    }

    render() {
         console.log(this.props.artistData);
        return (
            <div className="Artist">
                <li key={this.props.artist.name}>
                    <Link
                        to={'/artist/' + this.props.artist.name}
                        onClick={() => { this.onChoseArtist(this.props.artist).bind(this) }}>
                        {this.props.artist.name}
                    </Link>
                </li>
            </div>
        )
    }
}

export default Artist;