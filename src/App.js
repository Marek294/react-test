import React, { Component } from 'react';
import './App.css';
import CalendarComponent from './components/Calendar/Calendar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CalendarComponent />
      </div>
    );
  }
}

export default App;
