import React, { Component } from 'react';
import './ArtistSearchResult.css';
import Artist from '../Artist/Artist';
import Spinner from '../Spinner/Spinner';
import { ListGroup, Panel } from 'react-bootstrap';


class ArtistSearchResult extends Component {
    state = {
        artistmat: [],
        error: null,
        isLoaded: false,
        sA: '',
        do: false,
    }

    componentWillReceiveProps(searchingArtist) {
        this.setState({
            sA: this.props.searchingArtist,
            do: true,
        });
    }

    handleFetchMatchs = (neededArtist) => {
        const URL_BASIC = 'https://ws.audioscrobbler.com/2.0/?method=artist.search&artist=';
        const API_KEY = '&api_key=0b6cf004801c7d4b103426b29c6e006b&format=json';

        fetch(URL_BASIC + neededArtist + API_KEY) //!
            .then(res => res.json())
            .then((results) => {
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
    }

    componentDidMount() {
        const sA = this.props.searchingArtist;
        this.handleFetchMatchs(sA);
    }

    componentDidUpdate(searchingArtist, sA) {
        if (this.props.searchingArtist !== sA && this.state.do === true) {
            const searchingArtist = this.props.searchingArtist;

            this.handleFetchMatchs(searchingArtist);

            this.setState({
                do: false
            });
        }
    }


    render() {
        console.log(this.props.searchingArtist);
        const { error, isLoaded, artistmat } = this.state;

        if (error) {
            return <div className="errorText">Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div className="spin"><Spinner color={'#F5E3FA'} /></div>;
        } else if (artistmat.artist.length === 0) {
            return <div className="errorText">Такого артиста нет.</div>

        } else {
            return (
                <div>
                    <Panel>
                        <Panel.Title componentClass="h3" className="panel__title">Результаты поиска по {this.props.searchingArtist}: </Panel.Title>
                    </Panel>
                    <Panel.Body className="panel__body">
                        <ListGroup>
                            {artistmat.artist.map(artist => {
                                return <Artist
                                    key={artist.name}
                                    artist={artist}
                                    searchingArtist={this.props.searchingArtist}
                                />;
                            })}
                        </ListGroup>
                    </Panel.Body>
                </div>
            );
        }
    }
}

export default ArtistSearchResult;