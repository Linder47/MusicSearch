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
        isArtistChosen: false
    }

    handleChosenArtist = (artist) => {
        artist.preventDefault();
        this.setState({
            chosenArtist: artist,
            isArtistChosen: true
        });
    }

    render() {
        return (
            <Switch>
                <Route path='/' component={Main} />
        { this.state.isArtistChosen ? <Route path='/artist=' render={() => <Albums chosenArtist={this.handleChosenArtist}/>} /> : null }
            </Switch>
        )
    }
    // state = {
    //     addText: '',
    //     searchingArtist: '',
    // }

    // handleAddTextChange = (text) => {
    //     this.setState({
    //         addText: text
    //     });
    // }

    // handleAddSearch = () => {
    //     this.props.history.push('/artist=' + this.state.searchingArtist);
    //     this.setState({
    //         searchingArtist: this.state.addText,
    //         addText: ''
    //     });
    // }


}

export default MusicSearchApp;