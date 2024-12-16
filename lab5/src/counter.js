import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0, 
    };
  }

  handleIncrement = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 })); 
  };

  handleDecrement = () => {
    this.setState((prevState) => ({ count: prevState.count - 1 })); 
  };

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1> {/* Display the counter */}
        <button onClick={this.handleIncrement}>Inc</button>
        <button onClick={this.handleDecrement}>Dec</button>
      </div>
    );
  }
}

export default Counter;
