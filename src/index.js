import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import registerServiceWorker from './registerServiceWorker';
import MusicSearchApp from './containers/MusicSearchApp/MusicSearchApp';
import { BrowserRouter } from 'react-router-dom';

const MSApp = () => (
    <BrowserRouter>
      <MusicSearchApp />
    </BrowserRouter>
  )

ReactDOM.render(<MSApp />, document.getElementById('root'));
//registerServiceWorker();
