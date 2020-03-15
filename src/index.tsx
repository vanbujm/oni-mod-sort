import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Global } from '@emotion/core';
import { cssReset } from './cssReset';
import { App } from './App';
import { globalStyles } from './globalStyles';

const WrappedApp = () => (
  <>
    <Global styles={cssReset} />
    <Global styles={globalStyles} />
    <App />
  </>
);

ReactDOM.render(<WrappedApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
