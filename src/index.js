import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const MSApp = () => (
    <BrowserRouter basename="/MusicSearch/">
      <App />
    </BrowserRouter>
  )

ReactDOM.render(<MSApp />, document.getElementById('root'));
registerServiceWorker();
