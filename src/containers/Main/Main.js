import React, { Component }  from 'react';
import './Main.css';
import { Switch, Route } from 'react-router-dom';
import ArtistSearchResult from '../../components/ArtistSearchResult/ArtistSearchResult';
import Albums from '../Albums/Albums';
import UserSearch from '../../components/UserSearch/UserSearch';

class Main extends Component {
    state = {
        addText: '',
        searched: false ,
        // chosenArtist: ''
    }

    handleAddTextChange = (text) => {
        this.setState({
            addText: text
        });
    }

    handleAddSearch = (e) => {
        e.preventDefault();
        this.props.history.push('/search=' + this.state.addText);
        this.setState({ 
            searched: true
        });
       
        // //this.props.history.push('/artist=' + this.state.searchingArtist);
        // this.setState({
        //     searchingArtist: this.state.addText,
        //     //addText: ''
    }

    // handleChosenArtist = (artist) => {
    //     this.setState({
    //         chosenArtist: artist
    //     });
    // }

    render() {
        //console.log(this.props.isArtistChosen);
        console.log(this.props.chosenArtist);
        console.log(this.props.artistData);
        return (
            <div>
                <UserSearch
                    onAddTextChange={this.handleAddTextChange}
                    value={this.state.addText}
                    onAddSearch={this.handleAddSearch} />
                { this.state.searched ? <ArtistSearchResult
                searchingArtist={this.state.addText}
                // onChoseArtist={this.onChoseArtist}
                  /> : null }
            </div>
        )
    }
}

export default Main;