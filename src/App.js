import React, { Component } from 'react'
import './App.css'
import Tier1 from './Tier1.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Tier1 />
        <Tier1 />
      </div>
    )
  }
}

// when you click, it and its brother become same rando color
// all children become one shade lighter

export default App
