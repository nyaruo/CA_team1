import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';
import reportWebVitals from './reportWebVitals'

import Layout from './components/layout/Layout';

ReactDOM.render(
  <React.StrictMode>
		<Layout />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
