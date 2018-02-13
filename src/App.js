import React  from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Main from './containers/Main/Main';
import Albums from './containers/Albums/Albums';
import { PageHeader } from 'react-bootstrap';

const App = () => {
  // state = {
  //   chosenArtist: '',
  //   artistData: []
  // }

  // componentWillMount() {
  //   if (sessionStorage.getItem('artistData')) {
  //     const artistData = JSON.parse(sessionStorage.getItem('artistData'));
  //     const chosenArtist = artistData.name;

  //     this.setState({
  //       artistData,
  //       chosenArtist,
  //     });
  //   }
  // }

  // handleComeBackSearching = () => {
  //   this.props.history.goBack();
  // }

  // <Switch>
  //         <Route path='/artist/' render={(props) => <Albums {...props}
  //           chosenArtist={this.state.chosenArtist}
  //           onComeBackSearching={this.handleComeBackSearching} />} />
  //         <Route path='/' render={(props) => <Main {...props}
  //           artistData={this.state.artistData}
  //           chosenArtist={this.state.chosenArtist}
  //         />}
  //         /> }
  //               />
  //         </Switch>

  // render() {
    return (
      <div className="app-main-page">
        <div className="page-header">
          <PageHeader>Music Search App</PageHeader>
        </div>
        <Switch>
          <Route path='/artist/' component={Albums} />
          <Route path='/' component={Main} />
        </Switch>
      </div>
    )
  }
// }

export default App;
