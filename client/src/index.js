import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'react-table/react-table.css';
import 'mdbreact/dist/css/mdb.css';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
