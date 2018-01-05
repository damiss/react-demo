import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './demo01/demo'
import App from './demo02/Router'
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
