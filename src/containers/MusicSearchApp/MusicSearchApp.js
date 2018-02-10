import React, { Component } from 'react';
import './MusicSearchApp.css';
import { Switch, Route } from 'react-router-dom';
import UserSearch from '../../components/UserSearch/UserSearch';
import Main from '../Main/Main';
import Albums from '../Albums/Albums';
import { withRouter } from "react-router-dom";
import { PageHeader } from 'react-bootstrap';

class MusicSearchApp extends Component {
    state = {
        chosenArtist: '',
        artistData: []
    }

    componentWillMount() {
        if (sessionStorage.getItem('artistData')) {
            const artistData = JSON.parse(sessionStorage.getItem('artistData'));

            // if (localStorage.getItem('artistData')) {
            //     const artistData = JSON.parse(localStorage.getItem('artistData'));
            const chosenArtist = artistData.name;

            this.setState({
                artistData,
                chosenArtist,
            });
        }
    }

    handleComeBackSearching = () => {
        this.props.history.goBack();
    }

    render() {
        console.log(this.state.chosenArtist);
        console.log(this.state.artistData);
        const chosenArtist = this.state.chosenArtist;
        return (
            <div className="app-main-page">
            <div className="page-header">
                <PageHeader>Music Search App</PageHeader>
                </div>
                <Switch>
                    <Route path='/artist/' render={(props) => <Albums {...props}
                        chosenArtist={this.state.chosenArtist}
                        onComeBackSearching={this.handleComeBackSearching} />} />
                    <Route path='/' render={(props) => <Main {...props}
                        artistData={this.state.artistData}
                        chosenArtist={this.state.chosenArtist}
                    />}
                    /> }
                    />
              </Switch>
            </div>
        )
    }
}

export default MusicSearchApp;