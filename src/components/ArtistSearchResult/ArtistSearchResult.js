import React, { Component } from 'react';
import './ArtistSearchResult.css';
import Artist from '../Artist/Artist';
import { ListGroup } from 'react-bootstrap';

class ArtistSearchResult extends Component {
    state = {
        artistmat: [],
        error: null,
        isLoaded: false,
        sA: ''
    }

    componentWillMount() {
        // if (this.state.oldArtist != this.props.searchingArtist) {
        //     this.setState({
        //         newArtist: this.state.newArtist ? false : true
        //     });
        console.log(this.state.sA);

        const searchingArtist = this.props.searchingArtist;
        const sA= this.state.sA;

        if (sA != this.props.searchingArtist) {
            console.log(this.props);
            const URL_BASIC = 'http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=';
            const API_KEY = '&api_key=0b6cf004801c7d4b103426b29c6e006b&format=json';

            fetch(URL_BASIC + searchingArtist + API_KEY)
                .then(res => res.json())
                .then((results) => {
                    console.log(results);
                    this.setState({
                        isLoaded: true,
                        artistmat: results.results.artistmatches,
                        oldArtist: this.props.searchingArtist
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
        else {
            this.setState({
                sA: this.props.searchingArtist
            })
        }
    }


        render() {
            const { error, isLoaded, artistmat } = this.state;
            //console.log(artistmat);

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
                        <ListGroup>
                            {artistmat.artist.map(artist => {
                                return <Artist
                                    key={artist.name}
                                    artist={artist}
                                />;
                            })}
                        </ListGroup>
                    </div>
                );
            }
        }
    }

    export default ArtistSearchResult;