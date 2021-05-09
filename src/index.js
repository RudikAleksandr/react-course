import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { loadableReady } from '@loadable/component'
import App from './components/App/App';
import configureStore from './redux/configureStore';
import './index.css';

loadableReady(() => {
  hydrate(
    <App
      store={configureStore(window.PRELOADED_STATE)}
      Router={BrowserRouter}
    />,
    document.getElementById('root')
  );
})
