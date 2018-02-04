import React, { Component } from 'react';
import './ArtistSearchResult.css';
import Artist from '../Artist/Artist';
import { ListGroup } from 'react-bootstrap';

class ArtistSearchResult extends Component {
    state = {
        artistmat: [],
        error: null,
        isLoaded: false,
        sA: '',
        do: true,
    }

    componentWillReceiveProps(searchingArtist) {

        this.setState({
            sA: this.props.searchingArtist,
            do: true,
        });
    }

    componentDidMount() {
        const searchingArtist = this.props.searchingArtist;
        const sA = this.props.searchingArtist;

        console.log(this.props);
        const URL_BASIC = 'http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=';
        const API_KEY = '&api_key=0b6cf004801c7d4b103426b29c6e006b&format=json';

        fetch(URL_BASIC + sA + API_KEY) //!
            .then(res => res.json())
            .then((results) => {
                console.log(results);
                this.setState({
                    isLoaded: true,
                    artistmat: results.results.artistmatches,
                    sA: searchingArtist
                    
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

    componentDidUpdate(searchingArtist, sA) {
        if (this.props.searchingArtist !== sA && this.state.do === true) {
            const searchingArtist = this.props.searchingArtist;
            const sA = this.state.sA;

            console.log(this.props);
            const URL_BASIC = 'http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=';
            const API_KEY = '&api_key=0b6cf004801c7d4b103426b29c6e006b&format=json';


            fetch(URL_BASIC + searchingArtist + API_KEY) //!
                .then(res => res.json())
                .then((results) => {
                    console.log(results);
                    this.setState({
                        isLoaded: true,
                        artistmat: results.results.artistmatches,
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
                );

                this.setState({
                    do: false,
                    newA: false
                });
        }
    }


    render() {
        const { error, isLoaded, artistmat, sA } = this.state;
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