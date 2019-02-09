import React, { Component } from 'react';
import ChatInfos from '../../containers/ChatInfos/ChatInfos';
import TopBar from '../TopBar/TopBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <TopBar />
        <ChatInfos />
      </div>
    );
  }
}

export default App;
