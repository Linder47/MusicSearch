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
    }

    handleAddTextChange = (text) => {
        this.setState({
            addText: text
        });
    }

    handleAddSearch = (e) => {
        e.preventDefault();

        if (this.state.addText !== this.state.oldArtist) {
            this.props.history.push('/search/' + this.state.addText);

            this.setState({
                searched: true,
                oldArtist: this.state.addText
            });
        }
    }

    componentDidMount() {      
        if (this.props.history.location.pathname !== '/' ) {
            const path = this.props.history.location.pathname
            const ind = path.indexOf('/', 1);
            const artist = path.substr(ind+1);

            this.setState({
                oldArtist: artist,
                searched: true,
                addText: artist
            });
        }     
    }

    render() {
        console.log(this.state.addText);
        console.log(this.state.oldArtist);
        return (
            <div className='Main'>
                <UserSearch
                    onAddTextChange={this.handleAddTextChange}
                    value={this.state.addText}
                    onAddSearch={this.handleAddSearch} />
                {this.state.searched ? <ArtistSearchResult
                    searchingArtist={this.state.oldArtist} />
                    : null}
            </div>
        )
    }
}

export default Main;