import React from 'react';
import logo from './logo.svg';
import './App.css';
import GetData from './API'
// import { Glyphicon } from 'react-bootstrap';

function App() {
  return (
    <React.Fragment>
    <div><GetData/></div>
    </React.Fragment>
  );
}

export default App;
