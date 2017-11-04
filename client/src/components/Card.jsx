import React, { Component } from 'react';
import Axios from 'axios';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      apiData: null,
      apiDataLoaded: false,
      isAnswered: false,
    }
  };

  componentDidMount() {
    // console.log(this.state.id);
    Axios.get(`/cards/${this.state.id}`)
    .then(res => {
      console.log(res.data.card_data.card);
      this.setState({
        apiData: res.data.card_data.card,
        apiDataLoaded: true,
      });
    });
  }

  showAnswer() {
    return (
      <div id="answer">
        {this.state.apiData.a}
      </div>
    );
  }

  showCard() {
    return (
      <div id="question">
        {this.state.apiData.q}
        <div id="answers">
          <button className="answerButton" id="hard"
          onClick={() => { this.setState({ isAnswered: true }) }}>Hard</button>
          <button className="answerButton" id="okay"
          onClick={() => { this.setState({ isAnswered: true }) }}>Okay</button>
          <button className="answerButton" id="easy"
          onClick={() => { this.setState({ isAnswered: true }) }}>Easy</button>
        </div>
      </div>
    );
  }

  // Link to next card in array
  render() {
    return (
      <div>
        {this.state.apiDataLoaded ? this.showCard()
                                  : <p>Loading. . .</p>}
        {this.state.isAnswered ? this.showAnswer()
                                  : <p></p>}
      </div>
    );
  }
}

export default Card;
