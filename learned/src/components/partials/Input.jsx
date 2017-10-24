import React, { Component } from 'react';

class Input extends Component {
  render() {
    // How did I clear the input after I submit?
    return (
      <form
        onSubmit={this.props.handleSubmit}
      >
        <input
          id="addDeck"
          value={this.props.inputValue}
          text="text"
          name="deck"
          placeholder="Create a New Deck"
          onChange={this.props.handleChange}
        />
      </form>
    );
  }
}

export default Input;
