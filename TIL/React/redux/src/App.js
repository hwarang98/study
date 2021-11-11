import React, { Component } from 'react';
import './App.css';
import AddNumberRoot from './components/containers/AddNumber';
import DisplayNumberRoot from './components/DisplayNumberRoot';


class App extends Component {
  state = { number:0 }
  render(){
  return (
    <div className="App">
      <h1>Root</h1>
      <AddNumberRoot />
      <DisplayNumberRoot />
    </div>
    )
  }
}


export default App;