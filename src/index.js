// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import ParentComponent from './ParentComponent'; // Import ParentComponent correctly

ReactDOM.render(
  <React.StrictMode>
    <ParentComponent />
  </React.StrictMode>,
  document.getElementById('root')
);

