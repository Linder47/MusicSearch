import React, { Component } from 'react';
import './MusicSearchApp.css';
import UserSearch from '../../components/UserSearch/UserSearch';
import Main from '../Main/Main';

class MusicSearchApp extends Component {
    state = {
        addText: ''
    }

    handleAddTextChange = (text) => {
        this.setState({
            addText: text
        });
    }

    render() {
        return (
            <div>
                <UserSearch
                    onAddTextChange={this.handleAddTextChange}
                    value={this.state.addText}
                />
                <Main />
            </div>
        )
    }
}

export default MusicSearchApp;