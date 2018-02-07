import React, { Component } from 'react';
import './Albums.css';
import Album from '../../components/Album/Album';
import { ButtonToolbar, Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom'

class Albums extends Component {
    state = {
        albums: [],
        error: null,
        isLoaded: false
    }

    componentDidMount() {
        const chosenArtist = this.props.chosenArtist;
        const URL_BASIC = 'http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=';
        const API_KEY = '&api_key=0b6cf004801c7d4b103426b29c6e006b&format=json';
        const URL = URL_BASIC + chosenArtist + API_KEY;

        fetch(URL)
            .then(res => res.json())
            .then((result) => {
                console.log(result);
                this.setState({
                    isLoaded: true,
                    albums: result.topalbums
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

    onComeBackSearching = () => {
         this.props.history.goBack();    
    }

    render() {
        console.log(this.state.albums);
        const { error, isLoaded, albums } = this.state;

        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div className='albumsContainer'>
                    <p>Альбомы {this.props.chosenArtist}: </p>
                    <ButtonToolbar>
                        <Button onClick={() => { this.onComeBackSearching() }}>Назад</Button>
                    </ButtonToolbar>
                    <div className='albums'>
                        {albums.album.map(album => 
                            { return <Album
                                key={album.name + album.id}
                                id={album.name + album.id}
                                image={album.image[2]["#text"]}
                            /> } 
                          ) }
                    </div>
                </div>
            )
        }
    }
}
export default withRouter(Albums);