import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster,  y ou can change
// unregister() to register() below. Note this comes with some  pi tf alls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
