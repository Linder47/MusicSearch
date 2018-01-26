import React, { Component } from 'react';
import './MusicSearchApp.css';
import UserSearch from '../../components/UserSearch/UserSearch';
import Main from '../Main/Main';
import {withRouter} from "react-router-dom";
//import axios from 'axios';

class MusicSearchApp extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         addText: '',
    //         searchingArtist: '',
    //         artists: []
    //     };
    // }

    state = {
        addText: '',
        searchingArtist: '',
    }

    handleAddTextChange = (text) => {
        this.setState({
            addText: text
        });
    }

    handleAddSearch = () => {
        this.props.history.push('/artist=' + this.state.searchingArtist);
        this.setState({
            searchingArtist: this.state.addText.toLocaleLowerCase,
            addText: ''
        });
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <UserSearch
                    onAddTextChange={this.handleAddTextChange}
                    value={this.state.addText}
                    onAddSearch={this.handleAddSearch}
                />
                <Main searchingArtist={this.state.searchingArtist} />
            </div>
        )
    }
}

export default withRouter(MusicSearchApp);