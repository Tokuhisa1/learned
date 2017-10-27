import React, { Component } from 'react';
import Axios from 'axios';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  };

  componentDidMount() {
    console.log(this.props);
  }

  showCard() {

  }

  render() {
    return (
      <div></div>
    );
  }
}

export default Card;
