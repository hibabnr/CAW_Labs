import React, { Component } from 'react';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedButton: null, 
    };
  }

  handleClick = (buttonNumber) => {
    this.setState({ clickedButton: buttonNumber }); 
  };

  render() {
    return (
      <div>
        <h3>third question</h3>
        <button onClick={() => this.handleClick(1)}>Button1</button>
        <button onClick={() => this.handleClick(2)}>Button2</button>
        <button onClick={() => this.handleClick(3)}>Button3</button>

        {this.state.clickedButton && (
          <p>Button #{this.state.clickedButton} was clicked</p>
        )}
      </div>
    );
  }
}

export default Main;
