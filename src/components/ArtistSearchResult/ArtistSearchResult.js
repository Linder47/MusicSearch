import React, { Component } from 'react';
import './ArtistSearchResult.css';
//import axios from 'axios';

class ArtistSearchResult extends Component {
    state = {
        // addText: '',
        // searchingArtist: '',
        artistmatches: []

    }
    componentDidMount() {
        URL = 'http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=' + this.props.searchingArtist + '&api_key=0b6cf004801c7d4b103426b29c6e006b&format=json';
        fetch(URL).then(res => res.json()).then(result => {
            console.log(this.res);
            const posts = result.map(obj => obj.data);
            //this.setState({ artistmatches: posts });
          });
    }
    //const am = res.data.data.children.map(obj => obj.data);

    // const posts = res.data.data.children.map(obj => obj.data);
    //     this.setState({ posts });
    //   });

    render() {
        // const artistmatches = this.state.artistmatches;
        //const artist = artistmatches.artist;
        console.log(this.json);
        return (
            <div className="ASR">
                <p>Результаты поиска по {this.props.searchingArtist}: </p>
                <ul>
                    {this.state.artistmatches.map(artist =>
                        <li>{artist.name}</li>
                    )}
                </ul>
            </div>
        );
    }
}

export default ArtistSearchResult;