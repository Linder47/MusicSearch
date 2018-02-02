import React, { Component } from 'react';
import './MusicSearchApp.css';
import { Switch, Route } from 'react-router-dom';
import UserSearch from '../../components/UserSearch/UserSearch';
import Main from '../Main/Main';
import Albums from '../Albums/Albums';
import { withRouter } from "react-router-dom";

class MusicSearchApp extends Component {
    state = {
        chosenArtist: '',
        artistData: []
    }

    componentWillMount() {
        if (localStorage.getItem('artistData')) {
            const artistData = JSON.parse(localStorage.getItem('artistData'));
            const chosenArtist = artistData.name;

            this.setState({ 
                artistData,
                chosenArtist,
            });
        }
    }

    render() {
        console.log(this.state.chosenArtist);
        console.log(this.state.artistData);
        const chosenArtist=this.state.chosenArtist;
        return (
            <Switch>
                <Route path='/artist/' render={(props) => <Albums {...props} chosenArtist={this.state.chosenArtist} />} />
                {/* <Route path='/' component={Main} /> */}
                <Route path='/' render={(props) => <Main {...props}
                    // onChoseArtist={this.handleChosenArtist}
                    artistData={this.state.artistData}
                    chosenArtist={this.state.chosenArtist}
                />}
                /> }
                    />
                {/* render={() => <Main onChoseArtist={this.handleChosenArtist}/>} */}
                {/* { this.state.isArtistChosen ? <Route path='/artist=' render={() => <Albums chosenArtist={this.handleChosenArtist}/>} /> : null } */}
            </Switch>
        )
    }
}

export default MusicSearchApp;