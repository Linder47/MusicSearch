import React, { Component } from 'react';
import './Main.css';
import { Switch, Route } from 'react-router-dom';
import ArtistSearchResult from '../../components/ArtistSearchResult/ArtistSearchResult';
import Albums from '../Albums/Albums';
import UserSearch from '../../components/UserSearch/UserSearch';

class Main extends Component {
    state = {
        addText: '',
        searched: false,
        oldArtist: ''
    }

    handleAddTextChange = (text) => {
        this.setState({
            addText: text
        });
    }

    handleAddSearch = (e) => {
        e.preventDefault();

        if (this.state.addText != this.state.oldArtist) {
            this.props.history.push('/search=' + this.state.addText);

            if (this.state.searched != this.state.addText) {
                this.setState({
                    searched: true,
                    oldArtist: this.state.addText
                });
            }
        }
    }

    render() {
        console.log(this.state.addText);
        console.log(this.state.oldArtist);
        return (
            <div>
                <UserSearch
                    onAddTextChange={this.handleAddTextChange}
                    value={this.state.addText}
                    onAddSearch={this.handleAddSearch} />
                {/* {this.state.searched ? this.state.addText === this.state.oldArtist ? null : <ArtistSearchResult
                    searchingArtist={this.state.addText} />
                : null } */}
                {this.state.searched ?  <ArtistSearchResult
                    searchingArtist={this.state.addText} />
                : null }
            </div>
        )
    }
}

export default Main;