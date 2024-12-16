import React, { Component } from 'react'; 

class ToggleButton extends Component {
  constructor(props) {
    super(props);
    this.state = { clicked: null }; 
  }

  handleToggle = () => {
    this.setState((prevState) => ({
      clicked: prevState.clicked === null ? true : !prevState.clicked, 
    }));
  };

  render() {
    return (
      <div>
        <button onClick={this.handleToggle}>ClickMe</button>
        {this.state.clicked !== null && (
          <p>{this.state.clicked ? "Clicked" : "Not Clicked"}</p>
        )}
      </div>
    );
  }
}

export default ToggleButton;
