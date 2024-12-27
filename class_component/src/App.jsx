import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props); // Call the parent class's constructor
    this.state = {
      count: props.initialCount || 0, // Initialize state using props
    };
  }

  // Method to increment count
  increment = () => {
    this.setState((prevState) => ({ count: prevState.count+1 }));
  };

  // Method to decrement count
  decrement = () => {
    this.setState((prevState) => ({ count: prevState.count>=1?prevState.count-1:0 }));
  };

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}


