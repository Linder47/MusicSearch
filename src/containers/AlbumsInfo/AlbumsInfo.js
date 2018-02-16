import React, { Component } from 'react';
import './AlbumsInfo.css';
import '../Albums/Albums';
import Spinner from '../../components/Spinner/Spinner';
import { Panel, Table } from 'react-bootstrap';
import Song from '../../components/Song/Song';

class AlbumsInfo extends Component {
    state = {
        albumData: [],
        // tracks: [],
        error: null,
        isLoaded: false,
        albumSearch: []
    }

    componentDidMount() {
        const URL_BASIC = 'http://ws.audioscrobbler.com/2.0/?method=album.getinfo';
        const API_KEY = '&api_key=0b6cf004801c7d4b103426b29c6e006b&format=json';
        //const artistData = sessionStorage.getItem('artistData');
        const albumSearch = JSON.parse(sessionStorage.getItem('albumSearch'));
        // const namme = albumSearch.mbid;
        console.log(albumSearch.mbid);
        // + albumSearch.artist + '&album=' + albumSearch.name +

        fetch(URL_BASIC + API_KEY + '&mbid=' + albumSearch.mbid + '&format=json')
            .then((res) => res.json())
            .then((results) => {

                console.log(results);
                this.setState({
                    isLoaded: true,
                    albumData: results.album,
                    // tracks: results.album.tracks
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

    render() {
        const { error, isLoaded, albumData } = this.state;
        const albumSearch = JSON.parse(sessionStorage.getItem('albumSearch'));
        // const i = 1;
        console.log(albumData.tracks);

        if (error) {
            return <div className="errorText">Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div className="spin"><Spinner color={'#ffffff'} /></div>;
        } else {
            return (
                <div className="container  container--artist">
                    <Panel>
                        <Panel.Title componentClass="h3" className="title  title--artist">Альбом "{albumSearch.name}" </Panel.Title>
                    </Panel>
                    <div className="crown">♕ ♕ ♕</div>
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
                        </tbody>
                    </Table>
                    <div className="crown">♕ ♕ ♕</div>
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
                                {i++}
                                return <Song
                                     id={i}
                                     key={i}
                                    title={track.name}
                                    duration={track.duration}
                                />;                    
                            } )}
                        </tbody>
                    </Table>
                </div>
            )
        }
    }
}

export default AlbumsInfo;