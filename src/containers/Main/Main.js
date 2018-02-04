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
        oldArtist: '',
        mewA: false
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

            if (this.state.oldArtist !== this.state.addText) {
                this.setState({
                    searched: true,
                    oldArtist: this.state.addText
                });
            }
        }
    }

    // handleMakeFalse = () => {
    //     this.setState({
    //         searched: false,
    //         newA: true
    //     })
    // }

    render() {
        console.log(this.state.addText);
        console.log(this.state.oldArtist);
        return (
            <div className='Main'>
                <UserSearch
                    onAddTextChange={this.handleAddTextChange}
                    value={this.state.addText}
                    onAddSearch={this.handleAddSearch} />
                {/* {this.state.searched ? this.state.addText === this.state.oldArtist ? null : <ArtistSearchResult
                    searchingArtist={this.state.addText} />
                : null } */}
                {this.state.searched ? <ArtistSearchResult
                    searchingArtist={this.state.oldArtist}
                    // handleMakeFalse={this.handleMakeFalse}
                    // newA={this.state.newA} 
                    />
                : null }
            </div>
        )
    }
}

export default Main;