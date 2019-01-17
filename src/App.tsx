import React, { Component } from 'react';

import Button from "./components/Button";

import Header from "./components/Header";

import {GlobalStyle} from './theme/global.style';

class App extends Component {
  render() {
    return (
      <div className="App">
          <GlobalStyle/>
          <Header/>
      </div>
    );
  }
}

export default App;