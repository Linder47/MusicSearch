import React  from 'react';
import './Main.css';
import { Switch, Route } from 'react-router-dom';
import ArtistSearchResult from '../../components/ArtistSearchResult/ArtistSearchResult';
import Albums from '../../components/Albums/Albums';

const Main = (props) => (
    <Switch>
        {/* <Route path='/artist=' component={ArtistSearchResult}  /> */}
        <Route path='/artist=' render={() => <ArtistSearchResult searchingArtist={props.searchingArtist}/> } />
        <Route path='/artist=/album=' component={Albums} />
    </Switch>
)

export default Main;