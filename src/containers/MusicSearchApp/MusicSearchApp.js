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
        //isArtistChosen: false,
        artistData: []
    }

    componentWillMount() {


        // handleChosenArtist = (artist) => {
        if (localStorage.getItem('artistData')) {
            const artistData = JSON.parse(localStorage.getItem('artistData'));
            const chosenArtist = artistData.name;

            this.setState({ 
                artistData,
                chosenArtist,
               // isArtistChosen: true
            });
        }
    
    }

    // handleChosenArtist = (artist) => {
    //     artist.preventDefault();
    //     this.setState({
    //         chosenArtist: artist.name,
    //         isArtistChosen: true

    //     });
    //     //this.props.history.push('/artist=' + this.state.chosenArtist);
    // }

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