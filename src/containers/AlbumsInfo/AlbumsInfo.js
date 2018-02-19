import React, { Component } from 'react';
import './AlbumsInfo.css';
import '../../components/UserSearch/UserSearch.css';
import Spin from '../../components/Spinner/Spin';
import { Panel, Table, ButtonToolbar, Button, Image } from 'react-bootstrap';
import Song from '../../components/Song/Song';

class AlbumsInfo extends Component {
    state = {
        albumData: [],
        error: null,
        isLoaded: false,
        albumSearch: []
    }

    componentDidMount() {
        const URL_BASIC = 'https://ws.audioscrobbler.com/2.0/?method=album.getinfo';
        const API_KEY = '&api_key=0b6cf004801c7d4b103426b29c6e006b&format=json';
        const albumSearch = JSON.parse(sessionStorage.getItem('albumSearch'));
        console.log(albumSearch.mbid);

        fetch(URL_BASIC + API_KEY + '&mbid=' + albumSearch.mbid + '&format=json')
            .then((res) => res.json())
            .then((results) => {

                console.log(results);
                this.setState({
                    isLoaded: true,
                    albumData: results.album,
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            },
        );
    }

    onComeBackSearching = () => {
        this.props.history.goBack();
    }

    render() {
        const { error, isLoaded, albumData } = this.state;
        const albumSearch = JSON.parse(sessionStorage.getItem('albumSearch'));

        if (error) {
            return <div className="errorText">Error: {error.message}</div>;
        } else if (!isLoaded) {
            return (
                <div className='container  container--albums'>
                    <Spin/>
                </div>
            )
        } else if (!albumData) {
            return <div className="container container--artist">
                <div className="errorText">Sorry, there's no information about this album.</div>
                <ButtonToolbar>
                    <Button className="form__button  form__button--albumsInfo" onClick={() => { this.onComeBackSearching() }}>Назад</Button>
                </ButtonToolbar>
            </div>
        } else {
            return (
                <div className="container  container--artist">
                    <div className='album-image-table'>
                        <Image alt={albumData.name} src={albumData.image[3]["#text"]}></Image>
                        <div className='title-table'>
                            <Panel>
                                <Panel.Title componentClass="h3" className="title  title--artist">{albumSearch.name}</Panel.Title>
                            </Panel>
                            <Table>
                                <tbody className="table-data">
                                    <tr>
                                        <td>name:</td>
                                        <td> {albumData.name} </td>
                                    </tr>
                                    <tr>
                                        <td>artist:</td>
                                        <td>{albumData.artist}</td>
                                    </tr>
                                    <tr>
                                        <td>listeners:</td>
                                        <td>{albumData.listeners}</td>
                                    </tr>
                                    <tr>
                                        <td>playcount:</td>
                                        <td>{albumData.playcount}</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </div>
                    <Table>
                        <thead>
                            <tr className="table-titles">
                                <th>#</th>
                                <th>title</th>
                                <th>duration</th>
                            </tr>
                        </thead>
                        <tbody className="table-songs">
                            {albumData.tracks.track.map((track, i) => {
                                return <Song
                                    id={i+1}
                                    key={i}
                                    title={track.name}
                                    duration={track.duration}
                                />;
                            })}
                        </tbody>
                    </Table>
                </div>
            )
        }
    }
}

export default AlbumsInfo;