import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App.js';
import * as serviceWorker from './serviceWorker';
import 'tachyons';

ReactDOM.render( <App/>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//greeting={'Hello'+'There'}
//{robots} as it only export not export default so grab more eg {robots, anythingelse}
serviceWorker.unregister();