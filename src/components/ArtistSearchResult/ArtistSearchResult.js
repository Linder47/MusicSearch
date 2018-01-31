import React, { Component } from 'react';
import './ArtistSearchResult.css';
import Artist from '../Artist/Artist';
//import axios from 'axios';

class ArtistSearchResult extends Component {
    state = {
        artistmat: [],
        error: null,
        isLoaded: false
    }
    // const searchingArtist = this.props.searchingArtist;
    // componentDidMount() {
    //     URL = 'http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=' + this.props.searchingArtist + '&api_key=0b6cf004801c7d4b103426b29c6e006b&format=json';
    //     fetch(URL).then(res => res.json()).then(result => {
    //         console.log(this.res);
    //         const posts = result.map(obj => obj.data);
    //         //this.setState({ artistmatches: posts });
    //       });
    // }


    componentDidMount() {
        const searchingArtist = this.props.searchingArtist;
        console.log(this.props);
        const URL_BASIC = 'http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=';
        const API_KEY = '&api_key=0b6cf004801c7d4b103426b29c6e006b&format=json';
        //const URL = 'http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=' + searchingArtist + '&api_key=0b6cf004801c7d4b103426b29c6e006b&format=json';
        fetch(URL_BASIC + searchingArtist + API_KEY)
            .then(res => res.json())
            .then((results) => {
                console.log(results);

                // const posts = result.artistmatches; 
                this.setState({
                    isLoaded: true,
                    artistmat: results.results.artistmatches
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
            );
    }

    //const am = res.data.data.children.map(obj => obj.data);

    // const posts = res.data.data.children.map(obj => obj.data);
    //     this.setState({ posts });
    //   });

    render() {
        // const artistmatches = this.state.artistmatches;
        //const artist = artistmatches.artist;
        // console.log(this.state.artistmatches);
        //const artistmatches = this.state.artistmatches;
        const { error, isLoaded, artistmat } = this.state;
        console.log(artistmat);

        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else if (artistmat.artist.length === 0) {
            return <div className='ASRNone'>Такого артиста нет.</div>
        
        } else {
            return (
                <div className="ASR">
                    <p>Результаты поиска по {this.props.searchingArtist}: </p>
                    <ul>
                        {artistmat.artist.map(artist => {
                            // <li key={artist.name}>
                            //     {artist.name}
                            // </li>
                            return <Artist
                                key={artist.name}
                                artist={artist}
                            // onChoseArtist={this.props.onChoseArtist} 
                            />;
                        })}
                    </ul>
                </div>
            );
        }
    }
}

export default ArtistSearchResult;