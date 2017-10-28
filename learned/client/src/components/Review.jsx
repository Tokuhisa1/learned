import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

class Review extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      apiData: null,
      apiDataLoaded: false,
      cards: null,
    };
  }

  componentDidMount() {
    // console.log(this.state.id);
    Axios.get(`/decks/${this.state.id}`)
    .then(res => {
      // console.log(res.data.deck_data);
      this.setState({
        apiData: res.data.deck_data[0].card_set,
        apiDataLoaded: true,
        cards: res.data.deck_data[1].cards,
      });
    });
  }

  showDeck() {
    console.log(this.state.apiData, this.state.cards);
    return <div><Link to={`/decks/${this.state.id}/cards/${this.state.cards[0].id}`} className="link" apple={this.state.id}>{this.state.apiData.name}</Link></div>;
  }

  render() {
    return (
      <div id="review">
        {this.state.apiDataLoaded ? this.showDeck()
                                      : <p>Loading. . .</p>}
      </div>
    );
  }
}

export default Review;
