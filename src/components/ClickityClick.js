/* eslint-disable no-console */
/* eslint-disable react/button-has-type */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable spaced-comment */
// Code ClickityClick Component Here
import React from 'react';

class ClickityClick extends React.Component {
  constructor() {
    super();
    //Define the initial state
    this.state = {
      hasBeenClicked: false
    };
  }

  handleClick = () => {
    //Update our state here!
    //If we want access to our newly updated state, we can add a second argument to setState => a callback
    this.setState(
      {
        hasBeenClicked: true
      },
      () => console.log(this.state.hasBeenClicked)
    );
  };

  //render method

  render() {
    return (
      <div>
        <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}

export default ClickityClick;
